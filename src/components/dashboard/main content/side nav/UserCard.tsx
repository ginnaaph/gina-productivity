import { Avatar, AvatarFallback, AvatarRoot, HStack, Stack, Text, Box} from "@chakra-ui/react"
import logo from "@/assets/logo.png"

export const UserCard = () => {
    return (
        <Box px="5" py="9"> 
        <Stack gap="8">
        <HStack gap="2">
            <AvatarRoot>
                <AvatarFallback name ="user"/>
                    <Avatar.Image src={logo}/>
            </AvatarRoot>
            <Stack gap="0">
                <Text fontWeight="medium"> Gina's Space </Text>
                <Text textStyle="xs"> Settings</Text>

            </Stack>
        </HStack>
        </Stack>

        </Box>
    )
}