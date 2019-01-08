/**
 * Todo on the todo page.
 */
declare interface Todo {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly dateCreated: number;
}
