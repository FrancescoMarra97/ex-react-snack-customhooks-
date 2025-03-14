import { useState } from "react";

export default function useSwitch(defaultValue = false) {
    const [value, setValue] = useState(defaultValue)

    const toggle = () => setValue(prev => !prev)
    return ([value, toggle])
}