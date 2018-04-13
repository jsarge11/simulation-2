create table houses (
    house_id serial primary key,
    name varchar,
    address varchar,
    city varchar,
    state varchar,
    zip varchar
)

---------- alter table SQL

alter table houses
add column image varchar, 
add column monthly_mortgage varchar, 
add column desired_rent decimal;
