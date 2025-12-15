import path from 'node:path';
import { app, BrowserWindow } from 'electron';
import { ipcMain } from 'electron/main';
import { UpdateSourceType, updateElectronApp } from 'update-electron-app';
import { ipcContext } from '@/ipc/context';
import { IPC_CHANNELS } from './constants';

const inDevelopment = process.env.NODE_ENV === 'development';

function createWindow() {
  const preload = path.join(__dirname, 'preload.js');
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: inDevelopment,
      contextIsolation: true,
      nodeIntegration: false,
      nodeIntegrationInSubFrames: false,

      preload: preload,
    },
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'hidden',
    trafficLightPosition:
      process.platform === 'darwin' ? { x: 5, y: 5 } : undefined,
  });
  ipcContext.setMainWindow(mainWindow);

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }
}

async function installExtensions() {
  if (!inDevelopment) return;

  try {
    const { default: installExtension, REACT_DEVELOPER_TOOLS } = await import(
      'electron-devtools-installer'
    );
    const result = await installExtension(REACT_DEVELOPER_TOOLS);
    console.log(`Extensions installed successfully: ${result.name}`);
  } catch (err) {
    console.error('Failed to install extensions:', err);
  }
}

function checkForUpdates() {
  updateElectronApp({
    updateSource: {
      type: UpdateSourceType.ElectronPublicUpdateService,
      repo: 'Yuriy-Babyak/fix-grammar',
    },
  });
}

async function setupORPC() {
  const { rpcHandler } = await import('./ipc/handler');

  ipcMain.on(IPC_CHANNELS.START_ORPC_SERVER, (event) => {
    const [serverPort] = event.ports;

    serverPort.start();
    rpcHandler.upgrade(serverPort);
  });
}

app
  .whenReady()
  .then(createWindow)
  .then(setupORPC) // Setup IPC handler after creating window
  .then(installExtensions)
  .then(checkForUpdates);

//osX only
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
//osX only ends
