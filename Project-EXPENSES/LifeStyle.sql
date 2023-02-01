CREATE SCHEMA LifeStyle;

USE LifeStyle;

CREATE TABLE `LifeStyle`.`Expenses` (
    `ID` INT NOT NULL,
    `Housing` DOUBLE NOT NULL,
    `Household_Bills` DOUBLE NOT NULL,
    `Leisure` DOUBLE NOT NULL,
    `Transport` DOUBLE NOT NULL,
    `Holidays` DOUBLE NOT NULL,
    `Clothes` DOUBLE NOT NULL,
    `Savings` DOUBLE NOT NULL,
    `Area` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`ID`));


INSERT INTO `LifeStyle`.`Expenses` (`ID`, `Housing`, `Household_Bills`, `Leisure`, `Transport`, `Holidays`, `Clothes`, `Savings`, `Area`) VALUES ('1', '583.00', '457.78', '306.52', '144.83', '142.50', '43.88', '180.00', 'UK');