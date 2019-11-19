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