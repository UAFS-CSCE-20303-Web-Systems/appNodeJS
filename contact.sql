drop database if exists csce20303;
drop user if exists 'csce20303user'@'localhost';
create database csce20303;
use csce20303;

create user 'csce20303user'@'localhost' identified by 'csce20303pass';
grant all on csce20303.* to 'csce20303user'@'localhost';

create table contacts(
   contactID int AUTO_INCREMENT,
   username varchar(50),
   email varchar(120),
   primary key(contactID)
)engine=innodb;

insert into contacts(username,email) values('Jim Smith','jim.smith@gmail.com');
insert into contacts(username,email) values('Mary Jones','mjones@gmail.com');
insert into contacts(username,email) values('Rick Wilson','rick.wilson@gmail.com');
insert into contacts(username,email) values('Kim Johnson','kjohnson@gmail.com');
insert into contacts(username,email) values('Brian Williams','bwilliams@gmail.com');
