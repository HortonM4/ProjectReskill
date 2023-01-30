package com.example.FinalProject.model;

import javax.persistence.*;

//creating Getters & Setters, No Arg Constructor, toString() and AllArgConstructor

// Generate TABLE in database
@Entity
@Table(name = "expenses")
public class Expenses {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // to generate Id value automatically.
    @Column(name = "id")
    private Long id;
    @Column(name = "no_expense")
    private double noExpense;
    @Column(name = "low")
    private double low;
    @Column(name = "average")
    private double average;
    @Column(name = "high")
    private double high;
    @Column(name = "area")
    private double area;


    // noArg constructor
    public Expenses() {
    }

    //Setters & Getters
    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public double getNoExpense() {
        return noExpense;
    }

    public void setNoExpense(double noExpense) {
        this.noExpense = noExpense;
    }

    public double getLow() {
        return low;
    }

    public void setLow(double low) {
        this.low = low;
    }

    public double getAverage() {
        return average;
    }

    public void setAverage(double average) {
        this.average = average;
    }

    public double getHigh() {
        return high;
    }

    public void setHigh(double high) {
        this.high = high;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    // toString method
    @Override
    public String toString() {
        return "Expenses{" +
                "id=" + id +
                ", noExpense=" + noExpense +
                ", low=" + low +
                ", average=" + average +
                ", high=" + high +
                ", area=" + area +
                '}';
    }

    //AllArg Constructor
    public Expenses(Long id, double noExpense, double low, double average, double high, double area) {
        this.id = id;
        this.noExpense = noExpense;
        this.low = low;
        this.average = average;
        this.high = high;
        this.area = area;
    }
}
