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

-- to load csv file into restaurants table, execute the following from inise the psql shell
-- copy restaurants(restaurant, location) from '/Volumes/easystore/sdc/photo-gallery/restaurants1.csv' delimiter ',' csv header;

-- to load csv file into images table, execute the following from inside the sql shell
-- copy images(restaurant_id, image_url, description, date, user_submit, unrelated_flag, inappropriate_flag, dislike_flag) from '/Volumes/easystore/sdc/photo-gallery/images1.csv' delimiter ',' csv header;
