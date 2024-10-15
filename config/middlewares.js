module.exports = [
  // settings: {
  //   cors: {
  //     origin: ['*'],
  //     headers: ['*'] //allow all
  //   },
  // },

  "strapi::logger",
  "strapi::errors",
  "strapi::security",

  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000","http://localhost:5174","https://24hectors.vercel.app","http://143.110.177.97:3000","http://24hectares.com/","https://24hectares.com/"], // Allow your frontend's origin
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
      keepHeadersOnError: true,
    },
  },

  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
