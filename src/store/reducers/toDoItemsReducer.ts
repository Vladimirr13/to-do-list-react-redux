import { IToDoItemAction, IToDoItems, IToDoItemType } from '../../types/toDoList';

const initialState: IToDoItems = {
  toDoItems: [],
  toDoItemsSearch: null,
};
export const toDoItemsReducer = (state = initialState, action: IToDoItemAction): IToDoItems => {
  switch (action.type) {
    case IToDoItemType.ADD:
      return {
        toDoItems: [
          ...state.toDoItems,
          ...[{ id: action.payload.id, name: action.payload.name, check: action.payload.check }],
        ],
      };
    case IToDoItemType.DELETE:
      return {
        toDoItems: state.toDoItems.filter((item) => item.id !== action.payload.id),
      };
    case IToDoItemType.CHECK:
      return {
        toDoItems: state.toDoItems.map((item) => {
          if (item.id === action.payload.id) {
            item.check = !item.check;
          }
          return item;
        }),
      };
    case IToDoItemType.EDIT:
      return {
        toDoItems: state.toDoItems.map((item) => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name;
          }
          return item;
        }),
      };
    case IToDoItemType.SEARCH:
      return {
        toDoItems: state.toDoItems,
        toDoItemsSearch:
          action.payload.name !== ''
            ? state.toDoItems.filter((items) =>
                items.name.toLowerCase().includes(action.payload.name.toLowerCase()),
              )
            : null,
      };
    default:
      return state;
  }
};


