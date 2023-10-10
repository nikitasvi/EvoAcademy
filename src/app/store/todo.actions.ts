export class AddTodo {
  static readonly type = '[Todo] Add Todo';
  constructor(public todo: string) {}
}

export class RemoveTodo {
  static readonly type = '[Todo] Remove Todo';
  constructor(public todo: string) {}
}
