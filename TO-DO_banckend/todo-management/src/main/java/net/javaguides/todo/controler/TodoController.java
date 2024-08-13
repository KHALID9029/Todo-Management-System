package net.javaguides.todo.controler;

import lombok.AllArgsConstructor;
import net.javaguides.todo.dto.TodoDto;
import net.javaguides.todo.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/todos")
@AllArgsConstructor

public class TodoController {

    private TodoService todoService;

    // Build Add Todo Rest API

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto)
    {
        TodoDto savedTodo = todoService.addTodo(todoDto);

        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }

    // Build Get Todo By Id Rest API
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/{todoId}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable Long todoId)
    {
        TodoDto todoDto = todoService.getTodo(todoId);

        return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }

    // Build Get All Todos Rest API
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos()
    {
        List<TodoDto> todoDtos = todoService.getAllTodos();

        return new ResponseEntity<>(todoDtos, HttpStatus.OK);
    }


    // Build Update Todo Rest API
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{todoId}")
    public ResponseEntity<TodoDto> updateTodo(@RequestBody TodoDto todoDto, @PathVariable Long todoId)
    {
        TodoDto updatedTodo = todoService.updateTodo(todoDto, todoId);

        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }


    // Build Delete Todo Rest API
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{todoId}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long todoId)
    {
        todoService.deleteTodo(todoId);

        return ResponseEntity.ok("Todo Deleted Successfully");
    }


    // Build Complete Todo REST API
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PatchMapping("/{todoId}/complete")
    public ResponseEntity<TodoDto> completeTodo(@PathVariable Long todoId)
    {
        TodoDto updatedTodo = todoService.completeTodo(todoId);

        return ResponseEntity.ok(updatedTodo);
    }


    // Build Incomplete Todo REST API
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PatchMapping("{todoId}/in-complete")
    public ResponseEntity<TodoDto> inCompleteTodo(@PathVariable Long todoId)
    {
        TodoDto updatedTodo = todoService.inCompleteTodo(todoId);

        return ResponseEntity.ok(updatedTodo);
    }
}
