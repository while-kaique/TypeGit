
type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

import { useState } from "react";
import { BsSearch } from "react-icons/bs"

const Search = ({loadUser}: SearchProps) => {

    const [src, setSrc] = useState<string>('')

  return (
    <div>
        <h2>Busque por um usuário</h2>
        <p>Conheça seus melhores repositórios</p>
        <div>
            <input type="text" onChange={(e)=>{setSrc(e.target.value)}} placeholder="Digite o nome do usuário:" />
            <button onClick={()=>{loadUser(src)}}><BsSearch/></button>
        </div>
    </div>
  )
}

export default Search