import './App.css'
import { MainHeader } from './Components/organisms/MainHeader'
import { Outlet } from 'react-router-dom'
import './styles.scss';

function App() {

  return (
    <>
      <MainHeader/> 
      <Outlet/>
    </>
  )
}

export default App
