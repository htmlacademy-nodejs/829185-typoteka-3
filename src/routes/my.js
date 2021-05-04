'use strict';

const {Router} = require(`express`);
const myRouter = new Router();

myRouter.get(`/`, (req, res) => res.render(`admin-publications.pug`));
myRouter.get(`/comments`, (req, res) => res.render(`admin-comments.pug`));

module.exports = myRouter;