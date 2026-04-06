export default function sitemap() {
    const baseUrl = 'https://bedtimemoneyhabits.com';

    const routes = [
        { url: '/', priority: 1.0, changeFrequency: 'weekly' },
        { url: '/about', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/parents', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/teachers', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/membership-features', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/song-kit/follow-the-money-rules', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/games', priority: 0.7, changeFrequency: 'monthly' },
        { url: '/games/word-search', priority: 0.6, changeFrequency: 'monthly' },
        { url: '/games/memory-match', priority: 0.6, changeFrequency: 'monthly' },
        { url: '/games/decoder', priority: 0.6, changeFrequency: 'monthly' },
        { url: '/games/unscramble', priority: 0.6, changeFrequency: 'monthly' },
        { url: '/videos/money-rules', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/videos/joy-to-save', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/videos/earn-a-dollar', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/videos/spend-smart', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/videos/give-wisely', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/videos/great-habits', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/videos/rule-of-72', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/special-offers', priority: 0.6, changeFrequency: 'monthly' },
        { url: '/partners', priority: 0.5, changeFrequency: 'monthly' },
        { url: '/affiliates', priority: 0.5, changeFrequency: 'monthly' },
        { url: '/press', priority: 0.5, changeFrequency: 'monthly' },
        { url: '/inquiries', priority: 0.5, changeFrequency: 'monthly' },
        { url: '/write-a-review', priority: 0.5, changeFrequency: 'monthly' },
        { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
        { url: '/terms', priority: 0.3, changeFrequency: 'yearly' },
        { url: '/copyright', priority: 0.3, changeFrequency: 'yearly' },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
