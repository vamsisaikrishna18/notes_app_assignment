
import './App.css';
import UserAuth from './UserAuth';
import { useEffect,useState } from 'react';
import { auth } from './firebase';
import NotesApp from './NotesApp';
import Home from './Home';
const App = ()=> {
  const [presentUser,setPresentUser] = useState(null);
  useEffect(() => {
   auth.onAuthStateChanged(user=>{
    if (user){
      setPresentUser({
        uid:user?.uid,
        email:user?.email,
      })
    }else{
      setPresentUser(null)
    }
    setPresentUser({
      uid:user.uid,
      email:user.email,
    })
   })
  }, [])
  
  return (
    <>
    <div className="App">
      {presentUser?<Home/>:<UserAuth />}
    </div>
    </>
  );
}

export default App;
