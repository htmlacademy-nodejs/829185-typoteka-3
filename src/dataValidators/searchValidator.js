'use strict';

const {HTTP_CODES} = require(`../service/constants`);

module.exports = (req, res, next) => {
  const { search } = req.query;

  if (typeof search !== `string` || !search.length) {
    res.status(HTTP_CODES.BAD_REQUEST).send(`Bad request`);
  }

  next();
};
