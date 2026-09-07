import { TodoRepository } from './todo.repository';

export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getTodos() {
    return this.todoRepository.findAll();
  }
}
