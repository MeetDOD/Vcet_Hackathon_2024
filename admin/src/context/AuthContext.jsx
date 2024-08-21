import { createContext, useState, useEffect } from "react";


const AuthContext = createContext();


export default AuthContext;





export const AuthProvider = ({ children }) => {
    const [isNormalUser,setNormalUser] = useState(true);
    const [isAdminUser,setAdminUser] = useState(false);
    const [invalidCreds, setInvalidCreds] = useState(false)
    const promoteUser = (username,password) => {
        try{
            
            if(username === import.meta.env.VITE_ADMIN_USERNAME1 && password === import.meta.env.VITE_ADMIN_PASSWORD1 ){
                setAdminUser(true)
                setNormalUser(false)
                setInvalidCreds(false)
            }else{
                setInvalidCreds(true)
                alert("Wrong password")
            }
        }catch(e){
            console.log(e)
        }
    }
    const logoutAdmin = () => {
        setAdminUser(false);
        setNormalUser(true)
    }
    let contextData = {
        
        normalUser: isNormalUser,
        admin: isAdminUser,
        credError: invalidCreds,
        logUser: promoteUser,
        logOut: logoutAdmin

    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
