'use strict';

const express = require(`express`);
const app = express();
const path = require(`path`);
const port = 8080;
const PUBLIC_DIR = `public`;
const UPLOAD_DIR = `upload`;
const {
  myRoutes,
  mainRoutes,
  articlesRoutes
} = require(`./routes`);
const sequelize = require(`../service/lib/sequelize`);
const session = require(`express-session`);
const SequelizeStore = require(`connect-session-sequelize`)(session.Store);

const mySessionStore = new SequelizeStore({
  db: sequelize,
  expiration: 180000,
  checkExpirationInterval: 60000
});

sequelize.sync({force: false});

const {SESSION_SECRET} = process.env;
if (!SESSION_SECRET) {
  throw new Error(`SESSION_SECRET environment variable is not defined`);
}

app.use(express.urlencoded({extended: false}));

app.use(session({
  secret: SESSION_SECRET,
  store: mySessionStore,
  resave: false,
  proxy: true,
  saveUninitialized: false,
}));

app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use(express.static(path.resolve(__dirname, UPLOAD_DIR)));
app.use((err, req, res, next) => {
  console.log(`Something went wrong`, err);
  next(err);
});

app.use((req, res) => res.status(400).render(`errors/404`));
app.use((req, res) => res.status(500).render(`errors/500`));

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.listen(port);
