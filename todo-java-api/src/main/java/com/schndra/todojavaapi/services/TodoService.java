package com.schndra.todojavaapi.services;

import com.schndra.todojavaapi.enitity.TodoEntity;
import com.schndra.todojavaapi.model.Todo;
import com.schndra.todojavaapi.repository.TodoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    public List<Todo> getAllTodos() {
        List<TodoEntity> todoEntities = todoRepository.findAll();

        List<Todo> todos = todoEntities
                .stream()
                .map((todo) -> new Todo(
                        todo.getId(),
                        todo.getTitle(),
                        todo.isCompleted()))
                .collect(Collectors.toList());

        return todos;
    }

    public Todo updateTodo(Long id, Todo todo) {
        Optional<TodoEntity> todoEntity = todoRepository.findById(id);

        if(todoEntity.isPresent()){
            TodoEntity existingTodoEntity = todoEntity.get();

            BeanUtils.copyProperties(todo, existingTodoEntity);
            todoRepository.save(existingTodoEntity);
            return todo;
        }

        return null;
    }
}
