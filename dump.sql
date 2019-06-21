CREATE DATABASE auction;
USE auction;

CREATE TABLE itemdetails(
item_ID INT AUTO_INCREMENT NOT NULL,
title VARCHAR (20) NOT NULL,
expiryDate DATETIME,
highestBid INT NOT NULL DEFAULT 0,
highestBidderName VARCHAR(20) NOT NULL DEFAULT "No one (yet)",
PRIMARY KEY (item_ID));


INSERT INTO itemdetails (title, expiryDate)
VALUES ("Mouse", ("2008-07-04 11:11:11"));

INSERT INTO itemdetails (title, expiryDate, highestBid)
VALUES ("Cat", ("2020-07-04 11:11:11"), 4000);

