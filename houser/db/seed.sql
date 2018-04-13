create table houses (
    house_id serial primary key,
    name varchar,
    address varchar,
    city varchar,
    state varchar,
    zip varchar,
    img varchar,
    monthly_mortgage decimal,
    desired_rent decimal

)

---------- alter table SQL

alter table houses
add column image varchar, 
add column monthly_mortgage decimal, 
add column desired_rent decimal;
