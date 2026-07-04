export const dynamic = "force-static";
export const revalidate = 3600;
function extractUrlsFromMenu(menuData, baseUrl) {
    const urls = [];
    const menus = menuData?.data || [];
    if (!Array.isArray(menus)) {
        return urls; 
    }

    menus.forEach((menu) => {
        if (!menu.sections || !Array.isArray(menu.sections)) {
            return;
        }
        menu.sections.forEach((section) => {
            if (!section.items || !Array.isArray(section.items)) {
                return;
            }
            section.items.forEach((item) => {
                if (!item?.url) {
                    return;
                }
                let path = "";
                if (section.title === "Favourite Cities") {
                    path = `/city/${item.url}`;
                } else if (menu.title === "Packages") {
                    path = `/tour-package/${item.url}`;
                } else if (menu.title === "Experience") {
                    path = `/experience/${item.url}`;
                } else if (menu.title === "Destination") {
                    path = `/tours-location/${item.url}`;
                } else {
                    path = `/tours-location/${item.url}`;
                }
                urls.push({
                    url: `${baseUrl}${path}`,
                    lastModified: new Date(),
                    changeFrequency: "weekly",
                    priority: 0.7,
                });
            });
        });
    });
    console.log("Generated URLs:", urls.length);
    return urls;
}
function extractBlogUrls(blogData, baseUrl) {
    const urls = [];
    const blogs = blogData?.data || [];
    if (!Array.isArray(blogs)) {
        return urls;
    }
    blogs.forEach((blog) => {
        if (!blog?.url) {
        return;
        }
        urls.push({
            url: `${baseUrl}/blog/${blog.url}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        });
    });
    return urls;
}

function extractInternationalTourUrls(internationalTourPages, baseUrl) {
    const urls = [];
    const tours = internationalTourPages?.data || [];
    if (!Array.isArray(tours)) {
        return urls;
    }
    tours.forEach((tour) => {
        if (!tour?.url) {
        return;
        }
        urls.push({
            url: `${baseUrl}/tour-package/${tour.url}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        });
    });
    return urls;
}


export default async function sitemap() {
    const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.modernworldtravel.com";
    const staticPages = [
    {
        url: `${baseUrl}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0,
    },
    {
        url: `${baseUrl}/about-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/contact-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/gallery/landscape-image`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/gallery/landscape-video`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/gallery/portrait-image`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/gallery/portrait-video`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/international-tour-package`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
    },
    ];
    let menuPages = [];
    let blogPages = [];
    let internationalTourPages = [];
    try {
        const menuResponse = await fetch(
            "https://admin.modernworldtravel.com/api/header-menu",
            {
                cache: "no-store",
            }
        );
        if (menuResponse.ok) {
            const menuData = await menuResponse.json();
            menuPages = extractUrlsFromMenu(
                menuData,
                baseUrl
            );
            console.log(
                "Menu URLs Generated:",
                menuPages.length
            );
        } else {
            console.log(
                "Menu API Failed:",
                menuResponse.status
            );
        }
        /**
         * BLOG API
         */
        const blogResponse = await fetch(
            "https://admin.modernworldtravel.com/api/blog",
            {
                cache: "no-store",
            }
        );
        if (blogResponse.ok) {
            const blogData = await blogResponse.json();
            blogPages = extractBlogUrls(
                blogData,
                baseUrl
            );
        } else {
            console.log(
                "Blog API Failed:",
                blogResponse.status
            );
        }
        /**International Tour Package API */
        const InternationalTourResponse = await fetch(
            "https://admin.modernworldtravel.com/api/international-tour-package",
            {
                cache: "no-store",
            }
        );
        if (InternationalTourResponse.ok) {
            const international_tourData = await InternationalTourResponse.json();
            internationalTourPages = extractInternationalTourUrls(
                international_tourData,
                baseUrl
            );
        } else {
            console.log(
                "Tour API Failed:",
                InternationalTourResponse.status
            );
        }
    } catch (error) {
        console.log("Sitemap Error:", error);
    }
    const allPages = [
        ...staticPages,
        ...menuPages,
        ...blogPages,
        ...internationalTourPages,
    ];
    const uniquePages = Array.from(
        new Map(allPages.map((item) => [item.url, item])).values(),
    );
    console.log("Final Sitemap URLs:", uniquePages.length);
    return uniquePages;
}
