import { createContext } from 'react';

interface ContextProps {
  sidemenuOpen:boolean;
  isAddingEntry:boolean;
  //functions
  openSideMenu:() => void;
  closeSideMenu:() => void;
  setIsAddingEntry:(isAdd:boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
