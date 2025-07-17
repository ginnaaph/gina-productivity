import { Grid, GridItem, Box } from "@chakra-ui/react";
import { SideNavigation } from "./main content/side nav/SideNavigation";
import { MiddleSection } from "./main content/middle content/MiddleSection";
import { CalendarView } from "./main content/CalendarView";
import { ReminderNote } from "./main content/right content/Reminder";

export const ProductivityDash = () => {
  return (
    <Grid
      templateColumns="250px 1fr 300px"
      templateRows="auto 1fr"
      height="100vh"
      gap={1}
    >
      {/* Sidebar */}
      <GridItem rowSpan={2} colSpan={1}>
        <SideNavigation />
      </GridItem>

      {/* Middle Content */}
      <GridItem rowSpan={2} colSpan={1}>
        <MiddleSection />
      </GridItem>

      {/* Top Right - Reminder */}
      <GridItem rowSpan={1} colStart={3} height="fit-content">
        <ReminderNote />
      </GridItem>

      {/* Bottom Right - Calendar with box on top */}
      <GridItem rowSpan={2} colStart={3}>
        <Box display="flex" flexDirection="column" height="100%">
          <Box bg="purple.100" p={4} borderRadius="md" mb={2}>
            🔔 Add Reminder Here
          </Box>
          <Box flex="1" overflowY="auto">
            <CalendarView />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};
