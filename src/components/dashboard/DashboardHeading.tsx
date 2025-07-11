import logo from "@/assets/logo.png"
import { Text } from "@chakra-ui/react"
export const DashboardHeading = () =>{
  return(

  <section id="header" className="bg-[#C4DADE] h-[200px]  w-full flex items-center justify-center">
  <div className="flex items-center gap-6">
    <img src={logo} className="h-20 w-20 rounded-full" alt="logo" />
    <Text textStyle="4xl" fontWeight="semibold" fontFamily="mono"  letterSpacing="wide"> Gina's Dashboard</Text>

  </div>
</section>

    )
}