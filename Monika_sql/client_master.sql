create table client_master(
    ClientNo varchar(6) primary key,
    CName varchar(20) not null,
    Address1 varchar(30),
    Address2 varchar(30),
    City varchar(15),
    Pincode int,
    State varchar(15),
    Baldue int
);



insert into client_master (ClientNo, CName, Address1, Address2, City, Pincode, State, Baldue) values
('C00001','Ivan Bayross','A/14','Worli', 'Mumbai', 400054, 'Maharashtra', 15000),
('C00002','Mamta Muzumdar','65','Nariman', 'Madras', 780001, 'Tamil Nadu', 0),
('C00003','Chhaya Bankar','P-7','Bandra', 'Mumbai', 400057, 'Maharashtra', 5000),
('C00004','Ashwini Joshi','A/5','Juhu','Mumbai', 560001, 'Karnataka', 0),
('C00005','Hansel Colaco','A/9','Kama','Mumbai', 400060, 'Maharashtra', 2000),
('C00006','Deepak Sharma','A/10','Nama','Mumbai', 560050, 'Karnataka', 0);
