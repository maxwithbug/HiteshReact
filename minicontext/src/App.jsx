
import Login from '../components/Login/Login';
import Profile from '../components/Profile/Profile';
import UserContextProvider from '../context/UserContextProvider';
import './App.css'

function App() {


  return (
    <UserContextProvider>
      <h1> udemy video for context api </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
