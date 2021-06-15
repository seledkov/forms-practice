interface ITodo {
  id: string;
  text: string;
  isDone: boolean;
  onCompleteTodoToggle?: () => {};
  onRemoveTodo?: () => {};
}
