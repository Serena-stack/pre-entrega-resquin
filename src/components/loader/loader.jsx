import { Flex, Spinner } from "@chakra-ui/react";

export const Loader = ()=>{

    return (
        <Flex alignItems={"center"} justifyContent={"center"} height={"90vh"}>
            <Spinner/>
        </Flex>
    )
};