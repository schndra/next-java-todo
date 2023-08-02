package com.schndra.todojavaapi.controller;
import com.schndra.todojavaapi.model.Todo;
import com.schndra.todojavaapi.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<String> allTodos () {
        return new ResponseEntity<String>("All todos", HttpStatus.OK);
    }
}
