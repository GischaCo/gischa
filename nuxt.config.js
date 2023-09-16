export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Gischa | گیشا",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "قالب رایگان آکادمی گیشا دورهمی برنامه نویسان پادکست برنامه نویسی",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],
  /*
   ** auto import & register components
   */
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/composition-api/module", "@nuxtjs/svg"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    /*
     ** tailwind setup
     */
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
