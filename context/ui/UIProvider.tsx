import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen:boolean;
  isAddingEntry:boolean;
}

const UI_INITIAL_STATE:UIState = {
  sidemenuOpen: false,
  isAddingEntry: false
}

export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

  const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE )

  const openSideMenu = () => dispatch({ type:'[UI] - Open Sidebar' });
  const closeSideMenu = () => dispatch({ type:'[UI] - Close Sidebar' });
  const setIsAddingEntry = (isAdd:boolean) => dispatch({ type:'[UI] - IsAdding', payload:isAdd });

  return (
    <UIContext.Provider value={{
      ...state,
      //methods
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry
    }}>
      { children }
    </UIContext.Provider>
  )
}