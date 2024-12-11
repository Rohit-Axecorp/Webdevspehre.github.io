/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://webdevsphere.com', // Replace with your site URL
    generateRobotsTxt: true, // (Optional) Generate a robots.txt file
    changefreq: 'daily', // (Optional) Frequency for crawling
    priority: 0.7, // (Optional) Priority of the pages
    sitemapSize: 5000, // (Optional) Maximum entries per sitemap file
};

module.exports = config;
