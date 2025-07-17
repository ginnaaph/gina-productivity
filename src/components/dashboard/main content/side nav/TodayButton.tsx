import { Button , HStack, Text} from '@chakra-ui/react'
import { FaRegCheckSquare } from "react-icons/fa";


export const TodayButton= () => {
return (

    <HStack>
        <Button variant="ghost"><FaRegCheckSquare/><Text> 
            Today</Text></Button>
    </HStack>
)
}
