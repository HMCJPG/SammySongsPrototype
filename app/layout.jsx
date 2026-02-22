import './globals.css';
import Header from './components/Header';

export const metadata = {
    title: 'Sammy Rabbit Songs',
    description: 'Who is Sammy Rabbit? Listen to a song called Hello, hello, hello and sing along.',
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
                <Header />
                {children}
            </body>
        </html>
    );
}
