create table restaurants (
  id serial primary key,
  restaurant varchar(100),
  location varchar(100)
);

create table images (
  id serial primary key,
  restaurant_id integer,
  image_url varchar(200),
  description varchar(200),
  date varchar(200),
  user_submit boolean,
  unrelated_flag integer,
  inappropriate_flag integer,
  dislike_flag integer
);

-- alter table images add foreign key (restaurant_id) references restaurants(id);

-- copy restaurants(restaurant, location) from '/Users/sorodidiouf/Photo-Gallery/database/restaurants.csv' delimiter ',' csv header;

-- copy images(restaurant_id, image_url, description, date, user_submit, unrelated_flag, inappropriate_flag, dislike_flag) from '/Users/sorodidiouf/Photo-Gallery/database/images.csv' delimiter ',' csv header;
