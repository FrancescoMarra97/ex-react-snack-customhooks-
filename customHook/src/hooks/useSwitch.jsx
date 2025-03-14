import { useState } from "react";

export default function useSwitch() {
    const [value, setValue] = useState(false)

    const toggle = () => setValue(prev => !prev)
    return ([value, toggle])
}