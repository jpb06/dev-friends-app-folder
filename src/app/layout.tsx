import { Provider } from 'jotai';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import { Hero, Title } from '@atoms';
import { Modal } from '@client/molecules';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev friends',
  description: 'My dev friends',
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <head>
      <meta name="darkreader-lock" />
    </head>
    <body className={inter.className}>
      <Provider>
        <Hero>
          <main className="flex flex-col items-center justify-between">
            <Title>My dev friends</Title>
            <NuqsAdapter>{children}</NuqsAdapter>
          </main>
        </Hero>
        <Modal />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          pauseOnFocusLoss={true}
          draggable={true}
          pauseOnHover={true}
          theme="dark"
        />
      </Provider>
    </body>
  </html>
);

// biome-ignore lint/style/noDefaultExport: next
export default RootLayout;
