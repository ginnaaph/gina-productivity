import { TbCalendarWeek } from "react-icons/tb";
import { Button, HStack, Text} from '@chakra-ui/react'


export const WeeklyButton = () => {
    return (
         <HStack>
                        <Button variant="ghost"><TbCalendarWeek/>
                        <Text> This Week</Text></Button>
                    </HStack>
    )
}