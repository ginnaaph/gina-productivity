import { GreetingHeader } from "./GreetingHeader";
import { PriorityList } from "./PriorityList";
import {Box} from '@chakra-ui/react';

export const MiddleSection = () => {
    return (
        <Box px="3" py="2">
            <GreetingHeader/>
            <PriorityList/>
        </Box>
    )

}
