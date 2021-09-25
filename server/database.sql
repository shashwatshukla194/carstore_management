CREATE TABLE carshowroom (
	 id  INT PRIMARY KEY     NOT NULL,
     name VARCHAR(50) NOT NULL,
     description VARCHAR(250) NOT NULL,
     rdate   DATE NOT NULL,
     type VARCHAR ,
     variants VARCHAR(255),
     email VARCHAR(255) UNIQUE NOT NULL,
	 pnumber INT UNIQUE NOT NULL,
	 cost FLOAT NOT NULL
);