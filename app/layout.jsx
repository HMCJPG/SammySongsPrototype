import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SessionProvider from './components/SessionProvider';

export const metadata = {
    title: 'Bedtime Money Habits | Official Site | Songs & Stories for Kids',
    description: 'Bedtime Money Habits is a children\'s financial education program by Sam X Renick. Teach kids to save, earn, spend smart, give wisely, and invest through songs, stories, and conversations.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                {/* Organization + WebSite Schema (JSON-LD) for Entity-Based SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    "@id": "https://bedtimemoneyhabits.com/#organization",
                                    "name": "Bedtime Money Habits",
                                    "url": "https://bedtimemoneyhabits.com",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://bedtimemoneyhabits.com/assets/images/logo.png"
                                    },
                                    "description": "Bedtime Money Habits is a unique children's program designed by Sam X Renick to build foundational, lifelong money habits. Using songs, stories, and conversations, we teach children to save, earn, spend smart, give wisely, and invest.",
                                    "founder": {
                                        "@type": "Person",
                                        "name": "Sam X Renick"
                                    },
                                    "sameAs": [
                                        "https://sammyrabbit.com",
                                        "https://www.linkedin.com/in/samxrenick/"
                                    ]
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "https://bedtimemoneyhabits.com/#website",
                                    "url": "https://bedtimemoneyhabits.com",
                                    "name": "Bedtime Money Habits",
                                    "description": "Financial education for kids through songs, stories, and conversations.",
                                    "publisher": {
                                        "@id": "https://bedtimemoneyhabits.com/#organization"
                                    },
                                    "potentialAction": {
                                        "@type": "SearchAction",
                                        "target": "https://bedtimemoneyhabits.com/?s={search_term_string}",
                                        "query-input": "required name=search_term_string"
                                    }
                                }
                            ]
                        })
                    }}
                />
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
