import { MdOutlineCalendarMonth } from "react-icons/md";
import { Button, HStack, Text } from "@chakra-ui/react";

export const MonthlyTask = () => {
  return (
    <HStack>
      <Button variant="ghost">
        <MdOutlineCalendarMonth />
        <Text>This Month</Text>
      </Button>
    </HStack>
  );
};
