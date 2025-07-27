export type SiteConfig = typeof siteConfig

const baseTitle = 'Project Apple Tree'

export const siteConfig = {
    name: baseTitle,
    description:
        'Project: Apple Tree is a fictional Fundraiser and Donation campaign for our task in ICT by Ivan, Queen, and Nikki!',
    title: (pageName?: string) => {
        return pageName ? `${pageName} — ${baseTitle}` : baseTitle
    },
    pages: [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Donate',
            href: '/donate',
        },
        {
            label: 'Drop-off Locations',
            href: '/drop-off-locations',
        },
    ],
}
