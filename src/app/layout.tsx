import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Carolina Spa Movers',
    description: 'Serving the Carolinas and beyond, we specialize in moving hot tubs and spas.',
};

export default function RootLayout({ children }: PropsWithChildren<object>) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}