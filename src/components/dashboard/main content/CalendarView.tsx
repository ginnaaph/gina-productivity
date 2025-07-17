import { Box} from "@chakra-ui/react"
import { TimeBlockCalendar } from "@/components/calendar/TimeBlockCalendar"
import { sampleEvents } from "@/components/calendar/timeblocking/sampleEvents"
import { useState } from "react"
import type { CalendarEvent } from "@/components/calendar/timeblocking/types"

export const  CalendarView = () => {
   const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents)

    return (
        <Box  bg="#C0BFCf">
         <TimeBlockCalendar
         events={events}
         setEvents={setEvents}/>
        </Box>
    )
}