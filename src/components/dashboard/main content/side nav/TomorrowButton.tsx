import { Button , HStack, Text} from '@chakra-ui/react'
import { FiArrowRightCircle } from "react-icons/fi";

export const TomorrowButton = () => {
    return (
          <HStack>
                <Button variant="ghost"><FiArrowRightCircle/><Text> 
                    Tomorrow</Text></Button>
            </HStack>
        )
}