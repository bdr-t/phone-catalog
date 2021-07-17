import Card from './Card'
import { Grid, GridItem } from "@chakra-ui/react"
const HomePage = () => {
    return ( 
        <Grid templateColumns="repeat(5, 1fr)" gap={6} w='85%'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Grid>
     );
}
 
export default HomePage;