package com.example.FinalProject.controller;
import com.example.FinalProject.exception.ResourceNotFoundException;
import com.example.FinalProject.model.Expenses;
import com.example.FinalProject.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ExpenseController {
    @Autowired
    ExpenseRepository expenseRepository;


    @GetMapping("/expenses/{id}")
    public ResponseEntity<Expenses> getExpensesById(@PathVariable(value = "id") Long id) {
        Expenses expenses = expenseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found an expense with id = " + id));
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }
}

