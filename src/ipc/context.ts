import { os } from '@orpc/server';
import type { BrowserWindow } from 'electron';

class IPCContext {
  public mainWindow: BrowserWindow | undefined;

  public setMainWindow(window: BrowserWindow) {
    this.mainWindow = window;
  }

  public get mainWindowContext() {
    if (!this.mainWindow) {
      throw new Error('Main window is not set in IPC context.');
    }

    const window = this.mainWindow;
    return os.middleware(({ next }) =>
      next({
        context: {
          window,
        },
      }),
    );
  }
}

export const ipcContext = new IPCContext();
