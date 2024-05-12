import { Dispatch, SetStateAction } from 'react';

export type SearchContextType = {
  isSearch?: boolean;
  setIsSearch: Dispatch<SetStateAction<boolean>>;
}