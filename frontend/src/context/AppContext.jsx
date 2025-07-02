import { createContext,useState } from "react";
import { doctors } from "../assets/assets";
export const AppContext = createContext()

const AppContentProvider = (props)=>{

    const [popUp, setPopUP] = useState(false)  

   const currencySymbol = 'Rs'


    const value = {
         doctors,
         currencySymbol,
         popUp,
         setPopUP,
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContentProvider