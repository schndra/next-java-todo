package com.schndra.todojavaapi.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data // automatically add getters and setters
public class Todo {
    private long id;
    private String title;
    private boolean completed;
}
