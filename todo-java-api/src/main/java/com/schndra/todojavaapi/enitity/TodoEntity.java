package com.schndra.todojavaapi.enitity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "todos")
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private boolean completed;
}
