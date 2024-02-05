-- \sql

-- \connect root@localhost:3306

-- create database monika;

-- show database;

-- use monika;

-- show tables;

create table monika(
    id int ,
    firstname varchar(20),
    lastname varchar(30),
    gender varchar(20),
    email varchar(20),
    mobileNo int
);

-- describe monika;
-- desc monika;


insert into monika(id, firstname, lastname, gender, email, mobileNo) values (1, 'girish','Gondaliya','Male','girish@test.in',123456789);


insert into monika(id, firstname, lastname, gender, email, mobileNo) values 
(2, 'Vijay','Solanki','Male','vijay@test.in',123456789),
(3, 'Monika','Kathiriya','Female','moni@test.in',123456789),
(4, 'Srushti','Sojitra','Female','sru@test.in',123456789),
(5, 'Vijay','Dakhara','Male','vijay2@test.in',123456789);

insert into monika values (6, 'Jenil', 'Kakadiya', 'Male', 'jenil@test.in', 123456789);

-- skip some column data
insert into monika(id, firstname, lastname, gender, mobileNo) values 
(6, 'Krish','Ranghani','Male',,123456789);
(7, 'Mahendra','Purohit','Male',,123456789);


insert into monika values
(9, 'Vrishabh', 'Jogani', 'male', 123456789);

-- select * from monika;
