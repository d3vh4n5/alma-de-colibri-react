import { useState, ChangeEvent } from "react";

// export function useForm<T>(initState: T) {
export const useForm = <T extends Object>(initState: T) => {

    const [formulario, setFormulario] = useState(initState)

    // const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        // console.log(ev.target.value)
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return {
        formulario,
        handleChange, 
        ...formulario // Esto nos permite luego desestructurar todo lo que contenga el furmulario que le pasemos, directamente cuando uso el hook
    }
}