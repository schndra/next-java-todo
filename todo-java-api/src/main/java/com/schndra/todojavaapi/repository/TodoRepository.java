package com.schndra.todojavaapi.repository;

import com.schndra.todojavaapi.enitity.TodoEntity;

import com.schndra.todojavaapi.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, Long> {
}
