import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
      <h1 className="text-white text-center text-4xl font-semibold my-10">GihHub Finder</h1>
      <Outlet />
    </>
  )
}

export default App
