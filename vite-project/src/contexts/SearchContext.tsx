import { createContext } from "react";
import { SearchContextType } from "../types/search";
const SearchContext = createContext<SearchContextType>({isSearch: false, setIsSearch: ()=>null})

export default SearchContext