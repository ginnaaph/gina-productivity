import { MdOutlineHome } from "react-icons/md";
import { HStack, Text, Button } from "@chakra-ui/react";

export const HomeButton = () => {
  return (
    <HStack>
      <Button variant="ghost">
        <MdOutlineHome />
        <Text>Home</Text>
      </Button>
    </HStack>
  );
};
