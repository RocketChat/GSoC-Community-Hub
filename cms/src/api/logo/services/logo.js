'use strict';

/**
 * logo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::logo.logo');
