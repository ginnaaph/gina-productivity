import { Box, Text} from "@chakra-ui/react";
import { TodayButton } from "./TodayButton";
import { TomorrowButton } from "./TomorrowButton";
import { WeeklyButton } from "./WeeklyButton";
import { MonthlyTask } from "./MonthlyTask";
import  { UserCard } from './UserCard'
import { HomeButton } from "./HomeButton";
import { ThoughtsButton } from "./ThoughtsButton";

export const  SideNavigation = () => {
    return (
        <Box bg="#E6E6FA" h="100%" >  
        <UserCard /> 
        <HomeButton/>
        <ThoughtsButton/>

        <Text py="2" px="5" fontWeight="bold"> To Do's</Text>
        <TodayButton/>
        <TomorrowButton/>
        <WeeklyButton />
        <MonthlyTask /> 

        <Text py="2" px="5" fontWeight="bold">  Projects </Text>

        <Text py="2" px="5" fontWeight="bold">  Habits </Text>

         <Text py="2" px="5" fontWeight="bold">  Tags </Text>
        





        </Box>
    )
}