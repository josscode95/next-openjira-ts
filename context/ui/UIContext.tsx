import { createContext } from 'react';

interface ContextProps {
  sidemenuOpen:boolean;
  isAddingEntry:boolean;
  isDragging:boolean;
  //functions
  openSideMenu:() => void;
  closeSideMenu:() => void;
  setIsAddingEntry:(isAdd:boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
