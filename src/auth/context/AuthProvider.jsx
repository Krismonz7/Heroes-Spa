import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
//Usa el authcontext
//Va a exponer / proveer la informacion a toda la aplicacion
//Chikdren: Componentes hijos
//AuthContext.Provider: Crea el contexto
//value: 

const InitialState = {
    logged:false,
    name:'...'
}

//inicializer

const int = () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    

    return{
        logged:!!user,
        user:user
    }
}

export const AuthProvider = ({children}) => {


    //Use reducer recibe dos parametros:
    //Reducer: Dependiendo de los que se le envie, retorna un estado
    //Estado inicial :  es el estado inicial
    //se puede desestructurar


    const [authState,dispatch] =useReducer(authReducer,InitialState,int)

    const login = (name='') => {

        const user = {
            name,
            id:1
        };

        const action = {
            type:types.login,
            payload:user
        }

        localStorage.setItem('user',JSON.stringify(user))

        dispatch(action);
    };

    const logout = () =>{

        localStorage.removeItem('user');

        const action = {
            type: types.logout
        }

        dispatch(action)
    }

    return(
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>

            {children}

        </AuthContext.Provider>
    )
}
