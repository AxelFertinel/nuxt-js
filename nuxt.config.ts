// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                ".prisma/client/index-browser":
                    "./node_modules/.prisma/client/index-browser.js",
            },
        },
    },
    modules: ["@prisma/nuxt", "shadcn-nuxt"],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./app/components/ui"
         */
        componentDir: "./app/components/ui",
    },
    runtimeConfig: {
        apiSecret: "123",
        public: {
            apirUrl: process.env.API_URL as string,
        },
    },
});
