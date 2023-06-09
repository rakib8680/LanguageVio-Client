import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { getRole } from "../api/auth";




export const AuthContext = createContext(null)
const auth = getAuth(app);






const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true);




    // google signIn 
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }




    // // register with email and pass 
    const registerUser = (email, password) => {
        setLoading(true);
        console.log(loading);
        return createUserWithEmailAndPassword(auth, email, password)
    };


    // // sign in with email and pass
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };



    // // sign out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }



    // set current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, []);




    // get role 
    useEffect(() => {
        if (user) {
            getRole(user.email).then(data => setRole(data))
        }
    }, [user])




    // // update profile 
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // auth information 
    const authInfo = {
        user,
        handleGoogleSignIn,
        logOut,
        registerUser,
        signInUser,
        loading,
        updateUser,
        role,
        setRole
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;