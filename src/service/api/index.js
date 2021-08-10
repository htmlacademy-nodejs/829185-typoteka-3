'use strict';

const {Router} = require(`express`);
const search = require(`../api/search`);
const categories = require(`../api/categories`);
const articles = require(`../api/articles`);
const sequelize = require(`../lib/sequelize`);
const defineModels = require(`../models`);
const app = new Router();
const {
  SearchService,
  CategoriesService,
  ArticlesService,
  CommentsService
} = require(`../../dataServices`);

defineModels(sequelize);
(() => {
  articles(app, new ArticlesService(sequelize), new CommentsService(sequelize));
  categories(app, new CategoriesService(sequelize));
  search(app, new SearchService(sequelize));
})();

module.exports = app;
