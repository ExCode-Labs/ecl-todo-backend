import { TodoRepository } from './todo.repository';
import type { CreateTodoRequestDto } from './todo.dto';

export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getTodos() {
    return this.todoRepository.findAll();
  }

  async createTodos(data: CreateTodoRequestDto) {
    return this.todoRepository.create(data);
  }
}
