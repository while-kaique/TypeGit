
import Search from '../components/Search.tsx'
import { UserProps } from '../types/user.ts'

import { useState } from 'react'

const Home = () => {

  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async (userName: string) =>{

    const res = await fetch(`https://api.github.com/users/${userName}/repos`)

    const data = await res.json()

    console.log(data)

  }

  return (
    <div>
      Home
      <Search loadUser={loadUser}/>
    </div>
    
  )
}

export default Home