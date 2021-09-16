module.exports = {
  reactStrictMode: true,
  darkMode: "class",
  env: {},
  images: {
    domains: ["source.unsplash.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
