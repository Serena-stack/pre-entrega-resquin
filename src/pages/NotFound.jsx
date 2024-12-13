import { Flex, Heading, Text, Button } from "@chakra-ui/react"


export const NotFound = () => {
return (
    <Flex alignItems={"center"} justifyContent={"center"} flexDirection={"Column"}>
        <Heading>
            404 Not Found
        </Heading>
        <Text>Pagina no encontrada</Text>
        <Button>Volver al Home</Button>
    </Flex>
)
}