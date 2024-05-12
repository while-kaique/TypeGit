import { Outlet } from "react-router-dom"
import SearchContext from './contexts/SearchContext.tsx'
import { useState } from "react"


function App() {

  const [isSearch, setIsSearch] = useState(false)

  return (
    <>
      <h1 className="text-white text-center text-4xl font-semibold my-10">GihHub Finder</h1>
      <SearchContext.Provider value={{isSearch, setIsSearch}}>
        <Outlet />
      </SearchContext.Provider>
    </>
  )
}

export default App
