/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Disable image optimization
    },
    output: 'export', // Set the output mode to export static files
    distDir: 'out',   // Set the output directory to 'out' (default is '.next')
};

export default nextConfig;
