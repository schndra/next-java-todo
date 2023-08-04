package com.schndra.todojavaapi.controller;
import com.schndra.todojavaapi.model.Todo;
import com.schndra.todojavaapi.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/todos")
    public Todo createTodo (@RequestBody Todo todo) {
        return todoService.createTodo(todo);
    }

    @GetMapping("/todos")
    public List<Todo> allTodos ()
    {
        return todoService.getAllTodos();
    }

    //update todo by id
    @PutMapping("/todos/{id}")
    public Todo updateTodo(@PathVariable Long id,@RequestBody Todo todo){
        return todoService.updateTodo(id, todo);
    }

}
