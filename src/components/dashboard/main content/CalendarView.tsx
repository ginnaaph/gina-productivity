import { Box, Text } from "@chakra-ui/react"
import { TimeBlockCalendar } from "@/components/calendar/TimeBlockCalendar"
import { sampleEvents } from "@/components/calendar/timeblocking/sampleEvents"
export const  CalendarView = () =>{
    return (
        <Box h="100%" bg="#DDE8ED">
         <Text >Daily Schedule Block will go here!!! </Text>
         <TimeBlockCalendar
         events={sampleEvents}/>
        </Box>
    )
}