import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import Generating from './pages/Generating'

const App = () => {
  return (

    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/generate' element={<Generating/>} />
      </Routes>
    </div>
  )
}

export default App