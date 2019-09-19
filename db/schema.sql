DROP DATABASE IF EXISTS photo_gallery;

CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE listings (
  id int AUTO_INCREMENT PRIMARY KEY,
  name varchar(100),
  location varchar(100)
);

CREATE TABLE images (
  id int AUTO_INCREMENT PRIMARY KEY,
  listing_id int,
  image_url varchar(100),
  description varchar(100),
  date date,
  user_submit boolean,
  unrelated_flag int,
  inappropriate_flag int,
  dislike_flag int
);

ALTER TABLE images ADD FOREIGN KEY (listing_id) REFERENCES listings(id);
