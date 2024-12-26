import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
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
});
