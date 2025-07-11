import { Grid, GridItem} from '@chakra-ui/react'
import { SideNavigation } from './SideNavigation'
import { PriorityList} from './PriorityList'
import { DailyTimeSchedule } from './DailyTimeSchedule'

export const ProductivityDash =() => {
    return (
         <Grid h="500px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)">
            <GridItem rowStart={1}  colSpan={1}> <SideNavigation/> </GridItem>
            <GridItem rowStart= {1} colSpan={2}> <PriorityList/> </GridItem>
           <GridItem rowStart={1} colSpan={1}> <DailyTimeSchedule/> </GridItem>
           
            </Grid>
    )
}