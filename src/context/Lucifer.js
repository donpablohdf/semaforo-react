import React, {useState} from 'react'

const Context = React.createContext({})

export function Lucifer ({children}) {
    const SETTINGS ={ 
        luzRoja: "luzRoja", 
        luzAmarilla: "luzAmarilla", 
        luzVerde: "luzVerde", 
        luzMagenta: "luzMagenta", 
        luzNegra: "luzNegra", 
        creaMG: false, 
        paraSemaforo: false, 
        isPlaying:false,
        tresColores:true,
    }
    //let valores = Object.values(SETTINGS); // valores = ["Scott", "Negro", true, 5];
    const [luz, setLuz] = useState(SETTINGS)

return <Context.Provider value={{luz, setLuz}}>
{children}
</Context.Provider>
}

export default Context