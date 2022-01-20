import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import UserProfile from './Component/UserProfile';
import LogIn from "./Component/LogIn"
import './App.css';





function App() {


  const [accountBalance, setAccountBalance] = useState(14568.27)
  const [currentUser, setCurrentUser] = useState({userName: "bob_loblaw", memberSince: '08/23/99'})


  const mockLogIn = (logInInfo) => {
    const newUser = {...currentUser}
    newUser.userName = logInInfo.userName
    setCurrentUser(newUser)
    }
    
    
  //const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>}
  //const UserProfileComponent = () => {
    //<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
  //}
  return (
    <BrowserRouter>
    <Routes>
      
<Route path="/login" element={<LogIn user={currentUser}mockLogIn={mockLogIn}/>}/>
<Route exact path= "/" element={<Home accountBalance={accountBalance}/>} /> 
<Route exact path="/userProfile" element={<UserProfile userName = {currentUser.userName} memberSince= {currentUser.memberSince}/>}/>

    </Routes>
    </BrowserRouter>
  );
  }


export default App;
