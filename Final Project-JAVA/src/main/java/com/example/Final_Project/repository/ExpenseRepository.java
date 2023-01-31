package com.example.Final_Project.repository;

import com.example.Final_Project.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    Expense findByIncomeId(Long incomeId);
}