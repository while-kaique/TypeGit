
import { MdLocationPin } from 'react-icons/md'
import Search from '../components/Search.tsx'
import { UserProps } from '../types/user.ts'

import { useState } from 'react'

const Home = () => {

  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState<boolean>(false)

  const loadUser = async (userName: string) =>{

    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()

    if (res.status === 404){
      setError(true)
      return
    }
    setError(false)
    
    const { avatar_url, login, location, followers, following } = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }

    setUser(userData)
    console.log(data)

  }

  return (
    <>
      <div className='w-2/5 p-5 m-auto bg-zinc-700 rounded-lg'  >
        <Search loadUser={loadUser}/>
      </div>

      {user && !error ?
        <div id="user" className='w-2/5 p-5 my-5 m-auto bg-zinc-700 rounded-lg'>
          <img src={user.avatar_url} className='m-auto w-56 border-x-zinc-200 border-4 rounded-full' alt="Foto do perfil" />
          <p className='lowercase text-white mt-5 text-center text-3xl font-semibold'>{user.login}</p>

          {user.location &&
            <p className='flex justify-center items-center my-5 text-zinc-400'>
              {user.location}
              <MdLocationPin className='h-5 text-green-300' />
            </p>
          }

          <div id="info" className='flex justify-center items-center '>
            <p className='flex w-32 justify-center text-center items-center my-5 px-4 text-white'>
              Seguidores: <br></br>{user.followers}
            </p>
            <p className='flex w-32 justify-center text-center items-center my-5 px-4 border-l-[1px] border-gray-400 text-white'>
              Seguindo: <br></br>{user.following}
            </p>
          </div>

          <div id="btn" className='mx-auto w-2/5 h-12'>
            <button className=' w-full h-full bg-purple-700 rounded hover:bg-purple-500 transition ease-linear'>Ver melhores projetos</button>
          </div>

        </div>
      :
        <div id='circle' className='m-auto my-10 animate-spin rounded-full p-3 w-52 h-52 bg-gradient-to-r from-indigo-900 to-zinc-900'>
          <div id="core" className='w-full h-full bg-zinc-900 rounded-full'></div>
        </div>
      }
    </>
    
  )
}

export default Home