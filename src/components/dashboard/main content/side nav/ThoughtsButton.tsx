import { TbBubble } from "react-icons/tb";
import { HStack, Text, Button } from "@chakra-ui/react";

export const ThoughtsButton = () => {
return (

    <HStack>
        <Button variant="ghost">
            <TbBubble/>
            <Text> 
                Thoughts
            </Text>
            </Button>
    </HStack>
)
}