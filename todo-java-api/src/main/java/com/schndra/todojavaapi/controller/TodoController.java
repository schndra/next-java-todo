package com.schndra.todojavaapi.controller;
import com.schndra.todojavaapi.model.Todo;
import com.schndra.todojavaapi.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class TodoController {

    @Autowired
    private TodoService todoService;

    //create todo
    @PostMapping("/todos")
    public Todo createTodo (@RequestBody Todo todo) {
        return todoService.createTodo(todo);
    }

    //get todos []
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

    //delete todo by id
    @DeleteMapping("/todos/{id}")
    public void deleteTodo(@PathVariable Long id){
        todoService.deleteTodo(id);
    }


}
