/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

 const AuthProvider = ({children}) => {

    const [user,setuser]=useState(null)
    const [loading,setloading] =useState(true)

    const createUser =(email,password)=>{
      setloading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
        
    }

    const userLogin =(email,password)=>{
      setloading(true)
     
     return signInWithEmailAndPassword(auth,email,password)
    
    }
    const logOut =()=>{
      setloading(true)
      return signOut(auth)
      
    }
  

   


    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth,currentUser =>{
          console.log('and auth state change',currentUser)
          setuser(currentUser)
          setloading(false)

      })
       return ()=>{
        return unsubscribe()
       }
  },[])


 
 





    
  const authinfo = {
    user,
     createUser,
     userLogin,
     logOut,
     loading
     }

    return (
       <AuthContext.Provider value={authinfo}>
        {children}
       </AuthContext.Provider>
    );
};


export default AuthProvider;
