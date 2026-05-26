import ContactUsPage from './ContactUsPage';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
export const metadata = {
    title: 'Contact Us - Modern World Travel | Get in Touch for Travel Inquiries',
    description: 'Contact Modern World Travel in Varanasi for personalized holiday packages, hotel bookings, and travel services. Reach out for domestic and international tour inquiries.',
    keywords: 'contact Modern World Travel, travel agency Varanasi phone number, holiday packages inquiry, travel services contact, book tour Varanasi',
    authors: [{ name: 'Modern World Travel' }],
    openGraph: {
        title: 'Contact Modern World Travel - Plan Your Perfect Journey',
        description: 'Get in touch with our travel experts in Varanasi for customized holiday packages, hotel bookings, and travel assistance.',
        url: `${baseUrl}/contact-us`,
        siteName: 'Modern World Travel',
        images: [
            {
                url: '/assets/modern-img/contact-banner.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact Modern World Travel',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Modern World Travel',
        description: 'Reach out for all your travel needs - holiday packages, hotel bookings, and more.',
        images: ['/assets/modern-img/contact-banner.jpg'],
    },
    alternates: {
        canonical: `${baseUrl}/contact-us`,
    },
};

export default function ContactPage() {
    return (
        <ContactUsPage />
    )
}
