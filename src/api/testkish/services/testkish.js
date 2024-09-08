'use strict';

/**
 * testkish service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testkish.testkish');
