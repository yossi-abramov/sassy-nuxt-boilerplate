export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: ["@assets/scss/app.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/gtm"],
  /*
    ** Do not import actual styles. Use this module only to import variables, mixins, functions (et cetera) as they won't exist in the actual build. Importing actual styles will include them in every component and will also make your build/HMR magnitudes slower. Do not do this!
    Doc: https://github.com/nuxt-community/style-resources-module
  */
  styleResources: {
    // sass: [],
    scss: ["@assets/scss/_variables.scss"],
    // less: [],
    // stylus: []
  },
  /** Google Tag Manager Options
   *  Doc: https://github.com/nuxt-community/gtm-module
   */
  gtm: {
    id: "GTM-XXXXXXX",
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/sitemap", "@nuxtjs/robots"],
  /** Sitemap options
   * Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
   */
  sitemap: {
    hostname: "https://mysite.com",
  },
  /** Robots options
   * Doc: https://www.npmjs.com/package/@nuxtjs/robots
   */
  robots: {
    /* module options */
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
