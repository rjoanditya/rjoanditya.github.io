/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPageRepo = repoName.toLowerCase() === "rjoanditya.github.io";
const isGhActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: isGhActions && !isUserPageRepo ? `/${repoName}` : "",
    assetPrefix: isGhActions && !isUserPageRepo ? `/${repoName}/` : "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
