package com.bank.budgetplanner.controller;


import com.bank.budgetplanner.entity.Expense;
import com.bank.budgetplanner.repository.ExpenseRepository;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ExpenseController.class)
class ExpenseControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    ObjectMapper mapper;

    @MockBean
    ExpenseRepository expenseRepository;

    Expense RECORD_1 = new Expense(100, 200, 300,
            400, 500, 600, 700, "UK");
    Expense RECORD_2 = new Expense(200, 300, 400,
            500, 600, 700, 800, "UK");
    Expense RECORD_3 = new Expense(300, 400, 500,
            600, 700, 800, 900, "UK");


    @Test
    void getAllExpensesTest1() throws Exception {
        Expense expense = new Expense();
        mockMvc.perform(get("/api/budget/planner")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(toJson(expense)))
                .andExpect(status().isOk());
    }

    @Test
    public void getAllExpensesTest2() throws Exception {
        List<Expense> records = new ArrayList<>(Arrays.asList(RECORD_1, RECORD_2, RECORD_3));
        Mockito.when(expenseRepository.findAll()).thenReturn(records);
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/budget/planner")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(3)));
    }

    @Test
    void createExpenseTest() throws Exception {
        Expense expense = new Expense();
        mockMvc.perform(post("/api/budget/planner")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(toJson(expense)))
                .andExpect(status().isCreated());
    }

    protected String toJson(Object obj) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(obj);
    }

    protected <T> T fromJson(String json, Class<T> clazz)
            throws JsonParseException, JsonMappingException, IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(json, clazz);
    }

}

    /*  This is a JUnit test class for the ExpenseController class in a Spring Boot application.
        The @WebMvcTest annotation is used to specify that this test is a web-layer test and only the ExpenseController will be loaded.
        The MockMvc object is autowired to test the API endpoints, and the ObjectMapper is autowired for converting Java objects to and from JSON.
        The ExpenseRepository is mocked with the @MockBean annotation and several test cases are written to test the ExpenseController.
        The first two tests test the GET endpoint for getting all expenses and expect a 200 OK status and a JSON response with a size of 3, respectively.
        The third test tests the POST endpoint for creating an expense and expects a 201 CREATED status.
        Two helper methods, toJson and fromJson, are provided to convert objects to and from JSON.
    */