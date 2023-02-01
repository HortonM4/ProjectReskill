package com.bank.budgetplanner.entity;
import jakarta.persistence.*;


//using Hibernate /ORM for the application ,therefore, used @Entity annotation
//Create Getters and Setters, toString() method, NoArg constructor, and AllArgConstructor ((DT0 = Data Transfer Objects))
@Entity
@Table(name = "Expenses")
public class Expense {
    @Id   // Id is the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    @Column(name = "Housing")
    private double housing;

    @Column(name = "Household_Bills")
    private double householdBills;

    @Column(name = "Leisure")
    private double leisure;

    @Column(name = "Transport")
    private double transport;

    @Column(name = "Holidays")
    private double holidays;

    @Column(name = "Clothes")
    private double clothes;

    @Column(name = "Savings")
    private double savings;

    @Column(name = "Area")
    private String area;

    public Expense(double housing, double householdBills, double leisure, double transport, double holidays, double clothes, double savings, String area) {
        this.housing = housing;
        this.householdBills = householdBills;
        this.leisure = leisure;
        this.transport = transport;
        this.holidays = holidays;
        this.clothes = clothes;
        this.savings = savings;
        this.area = area;
    }

    public Expense() {
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public double getHousing() {
        return housing;
    }

    public void setHousing(double housing) {
        this.housing = housing;
    }

    public double getHouseholdBills() {
        return householdBills;
    }

    public void setHouseholdBills(double householdBills) {
        this.householdBills = householdBills;
    }

    public double getLeisure() {
        return leisure;
    }

    public void setLeisure(double leisure) {
        this.leisure = leisure;
    }

    public double getTransport() {
        return transport;
    }

    public void setTransport(double transportation) {
        this.transport = transportation;
    }

    public double getHolidays() {
        return holidays;
    }

    public void setHolidays(double holidays) {
        this.holidays = holidays;
    }

    public double getClothes() {
        return clothes;
    }

    public void setClothes(double clothes) {
        this.clothes = clothes;
    }

    public double getSavings() {
        return savings;
    }

    public void setSavings(double savings) {
        this.savings = savings;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }
}
