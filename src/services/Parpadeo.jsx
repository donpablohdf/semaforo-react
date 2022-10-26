import React, { useContext, useEffect, useState } from 'react'
import { useInterval, useTimeout } from 'usehooks-ts'
import Lucifer from '../context/Lucifer.js';

export default function Parpadeo() {
    const { luz, setLuz } = useContext(Lucifer);
    switch (luz.colores) {
        case 3:
            useInterval(() => {
                setLuz({ ...luz, luzRoja: "luzRoja" })
                setLuz({ ...luz, luzAmarilla: "luzNegra" })
                setLuz({ ...luz, luzVerde: "luzNegra" })

            }, luz.isPlaying ? 666 : null,)

            useInterval(() => {
                setLuz({ ...luz, luzRoja: "luzNegra" })
                setLuz({ ...luz, luzAmarilla: "luzAmarilla" })
                setLuz({ ...luz, luzVerde: "luzNegra" })

            }, luz.isPlaying ? 999 : null,)

            useInterval(() => {
                setLuz({ ...luz, luzRoja: "luzNegra" })
                setLuz({ ...luz, luzAmarilla: "luzNegra" })
                setLuz({ ...luz, luzVerde: "luzVerde" })
            }, luz.isPlaying ? 1335 : null,)

            break;
        case 4:

            useInterval(() => { setLuz({ ...luz, luzAmarilla: "luzAmarilla" }) }, luz.isPlaying ? params.delay1 : null,)
            useInterval(() => { setLuz({ ...luz, luzAmarilla: "luzNegra" }) }, luz.isPlaying ? params.delay2 : null,)
            break;
    }
    return (<></>)
}