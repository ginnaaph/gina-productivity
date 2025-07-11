import { Grid, GridItem} from '@chakra-ui/react'
import { SideNavigation } from './SideNavigation'
import { PriorityList} from './PriorityList'
import { CalendarView } from './CalendarView'

export const ProductivityDash =() => {
    return (
         <Grid h="500px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={1}>
            <GridItem rowStart={1}  colSpan={1}> <SideNavigation/> </GridItem>
            <GridItem rowStart= {1} colSpan={2}> <PriorityList/> </GridItem>
           <GridItem rowStart={1} colSpan={1}> <CalendarView/> </GridItem>
           
            </Grid>
    )
}