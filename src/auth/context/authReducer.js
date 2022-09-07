import { useState } from "react";
import { types } from "../types/types";
/* REDUCER: 
- Funcion que recibe un estado y una accion, 
y retorna un nuevo estado*/

//Funcion que recibe dos argumentos
//types: indica los tipos de accios que puede tener el action.type
//state: Estado inicial que se altera
//action: tiene el type la accion a realizar ej: '[TODO] Login', y payload indica 

export const authReducer = (state={},action) => {
  switch (action.type) {
    case types.login:
        return {
            logged: true,
            name: action.payload
        };

    
    case types.logout:
        return {
            logged: false
        };

    default:
        return state;
  }
}
