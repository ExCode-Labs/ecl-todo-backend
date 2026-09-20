import { prisma } from '../../database/prisma';
import type { CreateTodoRequestDto } from './todo.dto';

export class TodoRepository {
  private todos = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: '6ba7b810-9dad-41d1-80b4-00c04fd430c8',
      title: 'Set up Prisma',
      completed: true,
    },
    {
      id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'Create Todo API',
      completed: false,
    },
    {
      id: '8f14e45f-ea8f-4c8f-9b3c-6b9f1d2a4c11',
      title: 'Add request validation',
      completed: false,
    },
    {
      id: '9a4d6f2b-3c71-4e85-a8f2-1b6d9c0e7f22',
      title: 'Write unit tests',
      completed: false,
    },
    {
      id: 'a1b2c3d4-e5f6-4789-abcd-123456789001',
      title: 'Write integration tests',
      completed: true,
    },
    {
      id: 'b2c3d4e5-f6a7-4890-bcde-234567890012',
      title: 'Configure ESLint',
      completed: true,
    },
    {
      id: 'c3d4e5f6-a7b8-4901-cdef-345678900123',
      title: 'Configure Prettier',
      completed: true,
    },
    {
      id: 'd4e5f6a7-b8c9-4012-defa-456789001234',
      title: 'Add error handling',
      completed: false,
    },
    {
      id: 'e5f6a7b8-c9d0-4123-efab-567890012345',
      title: 'Deploy Todo backend',
      completed: false,
    },
  ];

  async findAll() {
    return this.todos;
  }

  async create(data: CreateTodoRequestDto) {
    return prisma.todo.create({
      data: {
        title: data.title,
        description: data.description ?? '',
        status: data.status ?? 'pending',
        priority: data.priority ?? 'medium',
        completed: data.completed ?? false,
        dueDate: data.dueDate ?? new Date(),
      },
    });
  }
}
