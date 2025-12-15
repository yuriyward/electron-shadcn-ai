import { RouterProvider } from '@tanstack/react-router';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useTranslation } from 'react-i18next';
import { updateAppLanguage } from './actions/language';
import { syncWithLocalTheme } from './actions/theme';
import { ErrorBoundary } from './components/error-boundary';
import { router } from './utils/routes';
import './localization/i18n';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    syncWithLocalTheme();
    updateAppLanguage(i18n);
  }, [i18n]);

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

const appElement = document.getElementById('app');
if (!appElement) {
  throw new Error('Root element with id "app" not found in the document');
}
const root = createRoot(appElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
