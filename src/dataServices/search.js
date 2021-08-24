"use strict";

const {Op} = require(`sequelize`);
const Alias = require(`../service/models/alias`);

class SearchService {
  constructor(sequelize) {
    this._Article = sequelize.models.Article;
    this._User = sequelize.models.User;
  }

  async findAll(searchText) {

    const articles = await this._Article.findAll({
      where: {
        title: {
          [Op.substring]: searchText
        }
      },
      include: [Alias.CATEGORIES,
        {
          model: this._User,
          as: Alias.USER,
          attributes: {
            exclude: [`passwordHash`]
          }
        }],
    });

    return articles.map((article) => article.get());
  }

}

module.exports = SearchService;
