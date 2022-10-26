import React, { useState } from 'react'

const Context = React.createContext({})

export function Lucifer({ children }) {
    const SETTINGS = {
        colores: 3,
        creaMG: false,
        isPlaying: false,
        luzAmarilla: "luzNegra",
        luzMagenta: "luzMagenta",
        luzNegra: "luzNegra",
        luzRoja: "luzNegra",
        luzVerde: "luzNegra",
    }
    //let valores = Object.values(SETTINGS); // valores = ["Scott", "Negro", true, 5];
    const [luz, setLuz] = useState(SETTINGS)

    return <Context.Provider value={{ luz, setLuz }}>{children}</Context.Provider>
}

export default Context