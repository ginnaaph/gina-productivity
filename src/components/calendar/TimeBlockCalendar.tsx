import { Calendar } from "react-big-calendar";
import localizer from "@/utils/dateFnsLocalizer";
import type { CalendarEvent } from "./timeblocking/types";
import { Box } from "@chakra-ui/react";
import type { View } from "react-big-calendar";
import { useState } from "react";

type TimeBlockCalendarProps = {
  events: CalendarEvent[];
  defaultView?: View;
  views?: View[];
};

export const TimeBlockCalendar = ({
  events,
  defaultView = "day",
  views = ["day", "week"],
}: TimeBlockCalendarProps) => {
  const [currentView, setCurrentView] = useState<View>(defaultView);
  return (
    <Box h="100%" w="100%" p={4}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        view={currentView}
        onView={(view) => setCurrentView(view)}
        views={views}
        style={{ height:500 }}
      />
    </Box>
  );
};
