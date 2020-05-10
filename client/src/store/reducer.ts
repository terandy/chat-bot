import produce from 'immer';
import { IState, initialState } from './initial-state';

interface IAction {
  type: string;
  content?: any;
}

const reducer = (state: IState = initialState, action: IAction): IState => {
  const newState = produce(state, newState => {
    switch (action.type) {
      case 'sample':
        newState.sample = action.content;
        break;
      case 'toggle-topNavDisplay':
        newState.topNavDisplay = action.content;
        break;
      default:
        return state;
    }
  });
  return newState;
};

export default reducer;
