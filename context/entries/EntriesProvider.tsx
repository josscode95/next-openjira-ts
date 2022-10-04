import { FC, PropsWithChildren, useReducer } from 'react';
import { v4 as uuidv4, v4 } from "uuid";

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries:Entry[];
}

const ENTRIES_INITIAL_STATE:EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pending: Amet dolor incididunt veniam elit cupidatat labore exercitation mollit elit consectetur.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'In-Progress: Nisi excepteur veniam occaecat tempor deserunt occaecat deserunt magna quis.',
      status: 'in-progress',
      createdAt: Date.now() - 100000
    },
    {
      _id: uuidv4(),
      description: 'Finished: Fugiat cupidatat ipsum aliquip laboris nisi.',
      status: 'finished',
      createdAt: Date.now() - 10000000
    },
  ]
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

  const [ state, dispatch ] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE )

  const addNewEntry = ( description:string ) => {

    const newEntry:Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch({ type:'[Entry] Add-Entry', payload:newEntry })

  }

  const updateEntry = ( entry:Entry ) => {
    dispatch({ type:'[Entry] Entry-Updated', payload: entry })
  }

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry,
      updateEntry
    }}>
      { children }
    </EntriesContext.Provider>
  )
}