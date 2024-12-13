import { Flex } from '@chakra-ui/react'
import { ItemCard } from '../ItemCard/ItemCard';


export const ItemListContainer = ({pro}) => {
    return <Flex wrap={"wrap"}>
        {pro.map((item)=>{
            return(
                <ItemCard key={item.id}  data={item}/>
            )
        })}
    </Flex>
};