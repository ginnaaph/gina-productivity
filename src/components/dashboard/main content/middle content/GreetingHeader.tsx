import { Text, Heading, Box} from "@chakra-ui/react";
import { getFormattedDate } from "@/utils/getFormattedDate";
import { getGreeting } from "@/utils/getGreeting";


export function GreetingHeader() {
  const greeting = getGreeting();
  const formattedDate = getFormattedDate();

  return (
    <Box  py="6">
      <Heading size="3xl">
        {greeting}, Gina 🌸
      </Heading>
      <Text fontSize="sm" color="gray.600">
        It’s {formattedDate}
      </Text>
    </Box>
  );
}