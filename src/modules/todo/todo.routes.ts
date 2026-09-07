import { Router } from 'express';

import { TodoController } from './todo.controller';
import { TodoRepository } from './todo.repository';
import { TodoService } from './todo.service';

const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

const router = Router();

router.get('/', todoController.getTodos.bind(todoController));

export default router;
