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
      origin: ["http://localhost:3000"], // Allow your frontend's origin
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
