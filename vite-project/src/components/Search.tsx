
type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs"

const Search = ({loadUser}: SearchProps) => {

    const [src, setSrc] = useState<string>('')

    function handleKeyDown(e: KeyboardEvent){
      if (e.key === "Enter"){
        loadUser(src)
      }
    }

  return (
    <>
        <h2 className="text-white text-center text-2xl font-semibold pb-4">Busque por um usuário:</h2>

        <p className="text-gray-500 text-center text-base font-medium pb-4">Conheça seus melhores repositórios</p>

        <div className="w-3/4 m-auto flex justify-center">
            <input className="p-1 mb-1 rounded-sm" type="text" onKeyDown={(e)=>{handleKeyDown(e)}} onChange={(e)=>{setSrc(e.target.value)}} placeholder="Digite o nome do usuário:" />
            <button className="h-8" onClick={()=>{loadUser(src)}}><BsSearch size={"2rem"} className="bg-zinc-900 text-white h-full mx-1 rounded p-1.5 text-xs /// hover:text-black hover:bg-gray-300"/></button>
        </div>
    </>
  )
}

export default Search