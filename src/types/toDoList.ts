export interface IToDoItem {
  id: number;
  name: string;
  check: boolean;
}

export interface IToDoItems {
  toDoItems: IToDoItem[] | [];
  toDoItemsSearch?: IToDoItem[] | null;
}

export enum IToDoItemType {
  DELETE = 'delete',
  EDIT = 'edit',
  CHECK = 'check',
  ADD = 'add',
  SEARCH = 'search',
}

interface IToDoItemActionDelete {
  type: IToDoItemType.DELETE;
  payload: IToDoItem;
}

interface IToDoItemActionEdit {
  type: IToDoItemType.EDIT;
  payload: IToDoItem;
}

interface IToDoItemActionCheck {
  type: IToDoItemType.CHECK;
  payload: IToDoItem;
}
interface IToDoItemActionADD {
  type: IToDoItemType.ADD;
  payload: IToDoItem;
}
interface IToDoItemActionSearch {
  type: IToDoItemType.SEARCH;
  payload: IToDoItem;
}

export type IToDoItemAction =
  | IToDoItemActionDelete
  | IToDoItemActionEdit
  | IToDoItemActionCheck
  | IToDoItemActionADD
  | IToDoItemActionSearch;
