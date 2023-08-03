package com.schndra.todojavaapi.services;

import com.schndra.todojavaapi.enitity.TodoEntity;
import com.schndra.todojavaapi.model.Todo;
import com.schndra.todojavaapi.repository.TodoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;
    public Todo createTodo(Todo todo) {
        TodoEntity todoEntity = new TodoEntity();

        BeanUtils.copyProperties(todo, todoEntity);
        todoRepository.save(todoEntity);
        return todo;
    }
}