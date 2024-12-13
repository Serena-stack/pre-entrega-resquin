import { useState } from "react"
import { Box, Button } from "@chakra-ui/react"

export const Counter = () => {

    const [count, setCount] = useState(0)
    const handledRemove = () => {
        setCount(count - 1)
    }
    const handledAdd = () => {
        setCount(count + 1)
    }

    return (<Box>
        <Button onClick={handledRemove}>-</Button>
        {count}
        <Button onClick={handledAdd}>+</Button>
    </Box>
    )
}