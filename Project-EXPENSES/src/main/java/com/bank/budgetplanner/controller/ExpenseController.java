package com.bank.budgetplanner.controller;

import com.bank.budgetplanner.entity.Expense;
import com.bank.budgetplanner.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/budget/")
public class ExpenseController {

    // ...from ExpenseRepository
    @Autowired
    ExpenseRepository expenseRepository;


    // will be using CRUD (* GET and POST only *)
    @GetMapping("/planner")
    public ResponseEntity<List<Expense>> getAllExpenses() {
        List<Expense> expenseList = new ArrayList<>(expenseRepository.findAll());
        return new ResponseEntity<>(expenseList, HttpStatus.OK);

    }

    @PostMapping("/planner")
    public ResponseEntity<Expense> createExpense(@RequestBody Expense expenses) {
        expenseRepository.save(expenses);
        return new ResponseEntity<>(expenses, HttpStatus.CREATED);
    }

}
   /*   This is a Java class that acts as a REST controller for handling requests related to expenses.
        The class is annotated with @RestController and maps incoming HTTP requests starting with "/api/budget/" to specific methods using @GetMapping and @PostMapping.
        The class uses the ExpenseRepository interface to handle database operations.
        The @Autowired annotation is used to automatically instantiate an implementation of the ExpenseRepository interface.
        The @CrossOrigin annotation allows cross-origin resource sharing, allowing requests from any origin.
        When a GET request to "/api/budget/planner" is received, the getAllExpenses() method is called, which retrieves a list of all expenses stored in the database through the ExpenseRepository and returns the list as a response with HTTP status code HttpStatus.OK.
        When a POST request to "/api/budget/planner" is received, the createExpense method is called, which saves a new expense passed in the request body to the database through the ExpenseRepository and returns the created expense as a response with HTTP status code HttpStatus.CREATED.
   */