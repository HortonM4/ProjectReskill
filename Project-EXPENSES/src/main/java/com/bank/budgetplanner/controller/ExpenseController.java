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
