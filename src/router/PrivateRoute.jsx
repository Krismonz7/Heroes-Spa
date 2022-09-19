import { useEffect } from "react";
import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context";


export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);
    const {pathname,search} = useLocation();

    
    useEffect(() => {
      
          const lastPath = pathname + search;
          console.log(lastPath);
          localStorage.setItem('lastPath',lastPath);
      
    }, [pathname,search])
    

  return (logged) ? children : <Navigate to={'/login'}/>
}
