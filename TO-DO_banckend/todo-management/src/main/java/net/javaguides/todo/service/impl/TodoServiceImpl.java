package net.javaguides.todo.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.todo.dto.TodoDto;
import net.javaguides.todo.entity.Todo;
import net.javaguides.todo.exception.ResourceNotFoundException;
import net.javaguides.todo.repository.TodoRepository;
import net.javaguides.todo.service.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;

    private ModelMapper modelMapper;

    @Override
    public TodoDto addTodo(TodoDto todoDto) {

        // convert TodoDto into Todo Jpa entity
        Todo todo = modelMapper.map(todoDto, Todo.class);

        // Todo Jpa entity
        Todo savedTodo = todoRepository.save(todo);

        // convert savedTodo Jpa entity into TodoDto
        TodoDto savedTodoDto = modelMapper.map(savedTodo, TodoDto.class);

        return savedTodoDto;
    }

    @Override
    public TodoDto getTodo(Long id) {

            // get Todo Jpa entity by id
            Todo todo = todoRepository.findById(id)
                    .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id :" + id));

            // convert Todo Jpa entity into TodoDto
            TodoDto todoDto = modelMapper.map(todo, TodoDto.class);

            return todoDto;

    }

    @Override
    public List<TodoDto> getAllTodos() {

        List<Todo> todos = todoRepository.findAll();


        return todos.stream().map(todo -> modelMapper.map(todo, TodoDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public TodoDto updateTodo(TodoDto todoDto, Long id) {

        Todo todo = todoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id :" + id));

        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setCompleted(todoDto.isCompleted());

        Todo updatedTodo = todoRepository.save(todo);

        return modelMapper.map(updatedTodo, TodoDto.class);
    }

    @Override
    public Void deleteTodo(Long id) {

        Todo todo = todoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id :" + id));

        todoRepository.deleteById(id);
        return null;
    }

    @Override
    public TodoDto completeTodo(Long id) {

        Todo todo = todoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id :" + id));

        todo.setCompleted(true);

        Todo updatedTodo = todoRepository.save(todo);

        return modelMapper.map(updatedTodo, TodoDto.class);
    }

    @Override
    public TodoDto inCompleteTodo(Long id) {

        Todo todo = todoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Todo not found with id :" + id));

        todo.setCompleted(false);

        Todo updatedTodo = todoRepository.save(todo);

        return modelMapper.map(updatedTodo, TodoDto.class);
    }
}
