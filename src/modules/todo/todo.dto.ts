export interface CreateTodoRequestDto {
  title: string;
  description?: string;
  status?: 'pending' | 'inProgress' | 'completed' | 'cancelled';
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  completed?: boolean;
  dueDate?: Date;
}
