import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { AppContextProvider, LoaderProvider, ThemeProvider, UIProvider, PaperworksProvider, WorkflowProvider } from '@/context';
import '@/translations/i18n';
import '@/styles/globals.scss';

const BrothersApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <LoaderProvider>
        <UIProvider>
          <SnackbarProvider maxSnack={3}>
            <PaperworksProvider>
              <WorkflowProvider>
                <AppContextProvider>
                  <Component {...pageProps} />
                </AppContextProvider>
              </WorkflowProvider>
            </PaperworksProvider>
          </SnackbarProvider>
        </UIProvider>
      </LoaderProvider>
    </ThemeProvider>
  );
};

export default BrothersApp;
