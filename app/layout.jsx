import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SessionProvider from './components/SessionProvider';

export const metadata = {
    title: 'BedtimeMoneyHabits.com',
    description: 'What are BedtimeMoneyHabits.com? Listen to a song called Hello, hello, hello and sing along.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body>
                <SessionProvider>
                    <Header />
                    {children}
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}
