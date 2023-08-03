package com.schndra.todojavaapi.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // automatically add getters and setters
@AllArgsConstructor //constructor with all the arguments
@NoArgsConstructor // constructor with no arguments
public class Todo {
    private long id;
    private String title;
    private boolean completed;
}
