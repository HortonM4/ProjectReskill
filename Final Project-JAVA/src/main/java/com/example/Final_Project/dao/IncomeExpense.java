package com.example.Final_Project.dao;

import com.example.Final_Project.entity.Income;
import lombok.Data;

@Data
public class IncomeExpense {

    private Long id;
    private double income;
    private double totalExpense;
    private double leftOver;

    public IncomeExpense(Long id, double income, double totalExpense, double leftOver) {
        this.id = id;
        this.income = income;
        this.totalExpense = totalExpense;
        this.leftOver = leftOver;
    }

    public IncomeExpense(Income income, double totalExpense, double leftOver) {
        this.id = income.getId();
        this.income = income.getMonthlyIncome();
        this.totalExpense = totalExpense;
        this.leftOver = leftOver;
    }

    public IncomeExpense() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getIncome() {
        return income;
    }

    public void setIncome(double income) {
        this.income = income;
    }

    public double getTotalExpense() {
        return totalExpense;
    }

    public void setTotalExpense(double totalExpense) {
        this.totalExpense = totalExpense;
    }

    public double getLeftOver() {
        return leftOver;
    }

    public void setLeftOver(double leftOver) {
        this.leftOver = leftOver;
    }
}

