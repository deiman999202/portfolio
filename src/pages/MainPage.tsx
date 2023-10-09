import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

const MainPage = () => {
  return (
    <main className='bg-yellow-400 h-screen'>
        <Header />
        <Outlet />
    </main>
  )
}

export default MainPage