
import { useEffect, useState } from "react";




export default function useCustomPointer(customPointer) {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const updatePosition = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY })
        }

        window.addEventListener('mousemove', updatePosition)

        return () => { window.removeEventListener('mousemove', updatePosition) }
    }, [])

    return (
        <div style={{
            position: "fixed",
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
            cursor: "none",

        }}
        >{customPointer}</div>
    )


}