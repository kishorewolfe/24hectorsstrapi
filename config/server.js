
module.exports = ({ env }) => ({
  host: '0.0.0.0',  // Make Strapi accessible externally
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://143.110.177.97/'), // Optional, add if you want to access via domain
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '24hectors123'),
    },
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
