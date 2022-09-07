import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

//Usa el authcontext
//Va a exponer / proveer la informacion a toda la aplicacion
//Chikdren: Componentes hijos
//AuthContext.Provider: Crea el contexto
//value: 

const InitialState = {
    logged:false,
}

export const AuthProvider = ({children}) => {


    //Use reducer recibe dos parametros:
    //Reducer: Dependiendo de los que se le envie, retorna un estado
    //Estado inicial :  es el estado inicial
    //se puede desestructurar

    const [authState,dispatch] =useReducer(authReducer,InitialState)


    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
