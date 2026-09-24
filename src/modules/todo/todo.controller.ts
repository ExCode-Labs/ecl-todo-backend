import type { Request, Response } from 'express';
import { TodoService } from './todo.service';
import { logger } from '../../config/logger';
import { createTodoSchema } from './todo.schema';

export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  async getTodos(req: Request, res: Response) {
    console.log(req.headers);
    const todos = await this.todoService.getTodos();
    logger.log('info', `returned all todos of length ${todos?.length}`);

    res.status(200).json(todos);
  }

  async createTodos(req: Request, res: Response) {
    const result = createTodoSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: 'Title and description are mandotary',
      });
      return;
    }

    const { title, description, status, priority, completed, dueDate } = result.data;

    const todo = await this.todoService.createTodos({
      title,
      description,
      status,
      priority,
      completed,
      ...(dueDate !== undefined ? { dueDate } : {}),
    });
    logger.log('info', `created todo with id ${todo.id}`);

    res.status(201).json({
      data: todo,
    });
  }
}
