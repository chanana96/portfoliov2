import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "./src/components"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@config": path.resolve(__dirname, "./src/config"),
            "@contexts": path.resolve(__dirname, "./src/contexts"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "contexts": path.resolve(__dirname, "./src/contexts"),
            "styles": path.resolve(__dirname, "./src/styles"),
        },
    },
    build: {
        assetsDir: "assets",
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    // Keep the original names for images in the public directory
                    const info = assetInfo.name as string;
                    if (info.endsWith(".png")) {
                        return "images/[name].[ext]";
                    }
                    return "assets/[name]-[hash].[ext]";
                },
                manualChunks: {
                    "react-vendor": ["react", "react-dom"],
                    "mui-vendor": ["@mui/material", "@mui/system"],
                    "router-vendor": ["react-router-dom"],
                },
            },
        },
    },
});
