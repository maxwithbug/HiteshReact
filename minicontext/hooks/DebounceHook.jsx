import React from "react";
import { useEffect } from "react";




export default function DebounceHook ( value , delay ) {

    const [ debounceValue , setDebounceValue ] = React.useState('')


    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceValue(value)
        },delay)

        return ()=>{
            clearTimeout(handler)
        }
    },[value,delay])
    return debounceValue;
}