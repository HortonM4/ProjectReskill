CREATE SCHEMA `life_style` ;

use `life_style`;

CREATE TABLE incomes (
    id  int NOT NULL AUTO_INCREMENT,
    monthly_income DOUBLE,
    PRIMARY KEY (id)
);

CREATE TABLE expenses (
    id  int NOT NULL AUTO_INCREMENT,
    housing DOUBLE,
    household_bills DOUBLE,
    leisure DOUBLE,
    transportation DOUBLE,
    holidays DOUBLE,
    clothes DOUBLE,
    savings DOUBLE,
    income_id int NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (income_id) REFERENCES incomes(id)
);