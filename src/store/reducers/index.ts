import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { toDoItemsReducer } from './toDoItemsReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  toDoList: toDoItemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
