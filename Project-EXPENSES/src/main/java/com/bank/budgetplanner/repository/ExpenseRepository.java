package com.bank.budgetplanner.repository;

import com.bank.budgetplanner.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
/*
 This code is a Java interface annotated with @Repository that extends the JpaRepository interface.
 The ExpenseRepository interface is a repository interface for the Expense entity class and it is used to interact with the database to perform CRUD (Create, Read, Update, Delete) operations on the Expense entity.
*/
