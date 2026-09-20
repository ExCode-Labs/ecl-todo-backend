import type { Request, Response } from 'express';
import { TodoService } from './todo.service';
import { logger } from '../../config/logger';
import type { CreateTodoRequestDto } from './todo.dto';

export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  async getTodos(_req: Request, res: Response) {
    const todos = await this.todoService.getTodos();
    logger.log('info', `returned all todos of length ${todos?.length}`);

    res.status(200).json({
      data: todos,
    });
  }

  async postTodos(req: Request, res: Response) {
    const todo = await this.todoService.postTodos(req.body as CreateTodoRequestDto);
    logger.log('info', `created todo with id ${todo.id}`);

    res.status(201).json({
      data: todo,
    });
  }
}
