package com.bank.budgetplanner.exception;

public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String msg) {
        super(msg);
    }
}
/* This code is a Java class that extends the RuntimeException class and creates a custom exception named ResourceNotFoundException.
 The class has a single constructor that takes a string parameter msg and passes it to the super constructor, which is the constructor of the RuntimeException class.
 When an instance of this exception is thrown, it indicates that a requested resource was not found.
 The string parameter msg can contain a custom message that provides more information about the exception.
 The serialVersionUID is a version identifier for serializing instances of this class.
 */