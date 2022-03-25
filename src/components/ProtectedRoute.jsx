import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            signOut,
            onAuthStateChanged
} from "firebase/auth";
import {auth} from "../firebase";

const userAuthcontext = createContext()

export function UserAuthcontextProvider({children}){

    const [user , setUser] = useState("")

    const signUp = (email , password  ) => {
            return createUserWithEmailAndPassword(auth , email,password)
    }

    const logIn = (email , password  ) => {
        return signInWithEmailAndPassword(auth , email,password)
    }

    useEffect(() => {
       
       const unsubscribe =  onAuthStateChanged(auth , (currentUser) => {
                setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])
    return (
        <userAuthcontext.Provider value={{user,signUp}}>{children}</userAuthcontext.Provider>
    )

    
}

export function useUserAuth(){
    return useContext(userAuthcontext)
}