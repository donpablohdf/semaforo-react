import React, { useState } from 'react'

const Context = React.createContext({})

export function Lucifer ({children}) {
    const SETTINGS ={ 
        luzRoja: "luzNegra", 
        luzAmarilla: "luzNegra", 
        luzVerde: "luzNegra", 
        luzMagenta: "luzMagenta", 
        luzNegra: "luzNegra", 
        creaMG: false, 
        isPlaying:false,
        colores:3,
    }
    //let valores = Object.values(SETTINGS); // valores = ["Scott", "Negro", true, 5];
    const [luz, setLuz] = useState(SETTINGS)

    return <Context.Provider value={{luz, setLuz}}>{children}</Context.Provider>
}

export default Context