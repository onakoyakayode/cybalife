import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './Splashscreen/SplashScreen'
import { useState, useEffect } from 'react'
import BookAppointment from './Pages/BookAppointment/BookAppointment'
import SignUp from './Pages/SignUp/SignUp'
import HomePage from './Pages/HomePage/HomePage'
import SignIn from './Pages/SignIn/SignIn'
// import Notification from './PopUp/Notification/Notification'



function App() {

  const [showScreen, setShowScreen] = useState(true)


  useEffect(() => {
    //hide Splash Screen after 3s
    setTimeout(() => 
      setShowScreen(false), 3000)
  }, [])

  return (
    <div className="App">
      <BrowserRouter className="app">
      {showScreen ? (<SplashScreen />): (
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/BookAppointment' element={<BookAppointment />} />
          <Route path='/signup' element={<SignUp />} /> 
          <Route path='/signin' element={<SignIn />} />
          {/* <Route path='/notificationPopUp' element={<Notification />} /> */}
        </Routes>
      )}
      </BrowserRouter>
      
    </div>
  )
}

export default App
