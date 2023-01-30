package com.example.FinalProject.repository;

import com.example.FinalProject.model.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expenses, Long> {
    List<Expenses> findByExpensesId(Long expensesId);
}
