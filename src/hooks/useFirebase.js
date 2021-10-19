import initilizeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut ,createUserWithEmailAndPassword,signInWithEmailAndPassword ,GithubAuthProvider   } from "firebase/auth";
import { useEffect, useState } from "react";


initilizeAuthentication();


const useFirebase=() =>{

const [user,setUser]=useState({});
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [exist,setExist]=useState({});

    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const signInUsingGoogle = ()=>{
      
     return   signInWithPopup(auth, googleProvider);
       
    
    }


    const usingGithub=()=>{
        signInWithPopup(auth, githubProvider)
  .then((result) => {
   
    setUser(result.user) ;

    // ...
  })
    }
    useEffect(()=>{

        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })

    },[]);

const usingEmail=e=>{
    setEmail(e.target.value)
}

const usingPassword=e=>{
    setPassword(e.target.value)
}


    const usingEmailAndPassword=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed in 
          const user = result.user;
          setExist(user);
          // ...
        })

    }


    const usingSignWithEmailAndPassword=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed in 
          const user = result.user;
          setExist(user);
          // ...
        })

    }

    
        const LogOut = ()=>{

    
            signOut(auth)
            .then(() => { });
      
    
    }


    

    return{
        user,
        signInUsingGoogle,
        email,
        usingEmail,
        password,
        usingPassword,
        usingSignWithEmailAndPassword,
        usingEmailAndPassword,
        exist,
        usingGithub,
        LogOut

    }


}

export default useFirebase;