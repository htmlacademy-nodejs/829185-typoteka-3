DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS post_categories;

CREATE TABLE categories(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(255) NOT NULL
);

CREATE TABLE users(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email varchar(255) UNIQUE NOT NULL,
  password_hash varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  avatar varchar(50) NOT NULL
);

CREATE TABLE posts(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title varchar(255) NOT NULL,
  announce text NOT NULL,
  fullText text NOT NULL,
  picture varchar(50),
  user_id integer NOT NULL,
  created_at timestamp DEFAULT current_timestamp,

  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  post_id integer NOT NULL,
  user_id integer NOT NULL,
  text text NOT NULL,
  created_at timestamp DEFAULT current_timestamp,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE post_categories(
  post_id integer NOT NULL,
  category_id integer NOT NULL,
  PRIMARY KEY (post_id, category_id),

  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE INDEX ON posts (title);
