import { z } from 'zod';

export const createTodoSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(200, 'Title must not exceed 200 characters'),

  description: z
    .string()
    .trim()
    .max(5000, 'Description must not exceed 5000 characters')
    .optional(),

  status: z.enum(['pending', 'inProgress', 'completed', 'cancelled']).default('pending'),

  priority: z.enum(['low', 'medium', 'high', 'urgent']).default('medium'),

  dueDate: z.coerce.date().optional(),

  completedAt: z.coerce.date().optional(),
});
