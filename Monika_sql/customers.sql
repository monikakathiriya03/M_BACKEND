use classicmodels;

select * from customers;

select * from customers limit 3;

select * from customers where country = 'usa' and city = 'nyc' and customerNumber > 400;

select * from customers where country = 'usa' or customerNumber > 400;

select * from customers where country = 'usa' or country = 'germany' or country = 'italy';

select * from customers where country in ('usa','germany','france');

select * from customers where country not in ('usa','germany','france');

select * from customers where customerNumber >= 200 and customerNumber <=350;

select * from customers where customerNumber between 200 and 350;

select * from customers where customerNumber not between 200 and 350;

select * from customers where customerName like 'mini%';
select * from customers where customerName like '%co';
select * from customers where customerName like '%model%';
select * from customers where customerName like "mini%co_";
select * from customers where customerName like '__o%';
select * from customers where customerName like '%o_';
select * from customers where customerName like '_o%___';


-- 05-01-2024

select * from customers;

select country from customers group by country;

select distinct creditLimit from customers;

select country, count(customerNumber) from customers group by country order by country;

select max(creditLimit) from customers;
select min(creditLimit) from customers;
select sum(creditLimit) from customers;
select avg(creditLimit) from customers;

select country, max(creditLimit) from customers group by country;
select country, min(creditLimit) from customers group by country;
select country, sum(creditLimit) from customers group by country;
select country, avg(creditLimit) from customers group by country;

select * from customers where country not in ('usa');       -- (4)
select * from customers where customerNumber not between 150 and 200 ;     -- (5)
select * from customers where creditLimit > 70000 order by contactLastName desc;    -- (7)
select * from customers where city in ('singapore','liverpool','NYC');     -- (8)
select * from customers where contactLastName like 'smith';      -- (9)
select * from customers where creditLimit between 50000 and 95000;        -- (11)
select * from customers where customerName like 's%';        -- (13)
select * from customers where contactLastName like 's%h';     -- (14)
select * from customers where contactLastName like 's____';      -- (15)
select * from customers where contactLastName like '________';      -- (16)
select * from customers where customerName like 'a%e';         -- (17)
select * from customers where customerName like '%ee%';       -- (18)
select state, max(creditLimit) from customers group by state;   -- (20)


