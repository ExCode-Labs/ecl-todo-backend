import type { Request, Response } from 'express';
import { TodoService } from './todo.service';
import { logger } from '../../config/logger';

export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  async getTodos(req: Request, res: Response) {
    console.log(req.headers);
    const todos = await this.todoService.getTodos();
    logger.log('info', `returned all todos of length ${todos?.length}`);

    res.status(200).json(todos);
  }
}
