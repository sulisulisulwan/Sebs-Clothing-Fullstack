DROP DATABASE IF EXISTS SebsClothing;

CREATE DATABASE SebsClothing;

CREATE TABLE Product (
  ID INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  slogan VARCHAR(256),
  description VARCHAR(256),
  category VARCHAR(100),
  default_price VARCHAR(20),
  PRIMARY KEY (ID)
);

CREATE TABLE Features (
  ID INT NOT NULL AUTO_INCREMENT,
  product_id ?
  feature STRING
  value STRING
  PRIMARY KEY (ID)
)

CREATE TABLE Related (
  ID INT NOT NULL AUTO_INCREMENT,
  current_product_id INT
  related_product_id INT
  ID INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)

)

CREATE TABLE SKUs (
  ID INT NOT NULL AUTO_INCREMENT,
  styleId INT
  size STRING
  quantity INT
  PRIMARY KEY (ID)

)

CREATE TABLE Styles (
  ID INT NOT NULL AUTO_INCREMENT,
  productId INT
  name VARCHAR(256)
  sale_price
  original_price
  default_style
  PRIMARY KEY (ID)
)

CREATE TABLE  Photos (
  ID INT NOT NULL AUTO_INCREMENT,
  styleId INT
  url VARCHAR(256)
  thumbnail_url VARCHAR(256)
  PRIMARY KEY (ID)
)

-- CREATE TABLE Cart (
--   ID INT NOT NULL AUTO_INCREMENT,
--   user_session
--   product_id
--   active Binary
--   PRIMARY KEY (ID)
-- )

CREATE TABLE Questions (
  ID INT NOT NULL AUTO_INCREMENT,
  product_id VARCHAR (20),
  body VARCHAR(256),
  date_written DATETIME
  asker_name VARCHAR(100),
  asker_email VARCHAR(100),
  reported BOOLEAN,
  helpful INT,
  PRIMARY KEY (ID)
)
  -- DATETIME is YYYY-MM-DD HH:MI:SS

CREATE TABLE Answers_Photos (
  ID INT NOT NULL AUTO_INCREMENT,
  answer_id INT
  url VARCHAR(250)
  PRIMARY KEY (ID)
)


CREATE TABLE Answers (
  ID INT NOT NULL AUTO_INCREMENT,
  question_id INT
  body VARCHAR(256)
  date_written DATETIME
  answerer_name VARCHAR(100)
  answerer_email VARCHAR(100)
  reported BOOLEAN
  helpful INT
  PRIMARY KEY (ID)
)

CREATE TABLE Characteristic_Reviews (
  ID INT NOT NULL AUTO_INCREMENT,
  characteristic_id INT,
  review_id INT
  value VARCHAR(100)
  PRIMARY KEY (ID)
)

CREATE TABLE Characteristics (
  ID INT NOT NULL AUTO_INCREMENT,
  product_id INT
  name VARCHAR(100)
  PRIMARY KEY (ID)
)

CREATE TABLE Review_Photos (
  ID INT NOT NULL AUTO_INCREMENT,
  review_id INT
  url VARCHAR(256)
  PRIMARY KEY (ID)
)
CREATE TABLE Reviews (
  ID INT NOT NULL AUTO_INCREMENT,
  product_id INT,
  rating INT,
  date DATETIME,
  summary VARCHAR(256),
  body VARCHAR(256),
  recommend BOOLEAN,
  reported BOOLEAN,
  reviewer_name VARCHAR(100),
  reviewer_email VARCHAR(100),
  response VARCHAR(100) NULL,
  helpfulness INT,
  PRIMARY KEY (ID)
)

