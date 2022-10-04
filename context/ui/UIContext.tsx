import { createContext } from 'react';

interface ContextProps {
  sidemenuOpen:boolean;
  //functions
  openSideMenu:()=>void;
  closeSideMenu:()=>void;
}

export const UIContext = createContext({} as ContextProps);
