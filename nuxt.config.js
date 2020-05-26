export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@assets/scss/app.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/style-resources", // TODO: Remove when upgrading to nuxt 2.13+
    "@nuxt/components" // Doc: https://github.com/nuxt/components
  ],
  /*
   ** Do not import actual styles. Use this module only to import variables, mixins, functions (et cetera) as they won't exist in the actual build. Importing actual styles will include them in every component and will also make your build/HMR magnitudes slower. Do not do this!
   Doc: https://github.com/nuxt-community/style-resources-module
   */
  styleResources: {
    // sass: [],
    scss: ["@assets/scss/_variables.scss"]
    // less: [],
    // stylus: []
  },
  /**
   * Allow auto import components for Nuxt.js 2.10+
   */
  components: true,
  /** Sitemap options
   * Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
   */
  sitemap: {
    hostname: "https://mysite.com"
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/sitemap"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
