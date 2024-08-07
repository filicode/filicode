import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.filicode.xyz/'),
    title: {
        default: 'Filip Kokalj Zupančič',
        template: '%s | Filip Kokalj Zupančič',
    },
    description: 'Developer and entrepreneur.',
    openGraph: {
        title: 'Filip Kokalj Zupančič',
        description: 'Software developer interested in blockchain, AI and data engineering.',
        url: 'https://filicode.xyz',
        siteName: 'filicode',
        locale: 'en_US',
        type: 'website',
    },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                'text-black bg-white dark:text-white dark:bg-[#111010]',
                GeistSans.variable,
                GeistMono.variable
            )}
        >
        <head>
        </head>
        <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
        </main>
        </body>
        </html>
    );
}
