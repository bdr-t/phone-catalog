import Card from "./Card";
import { Grid} from "@chakra-ui/react";
const HomePage = () => {
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(4, 1fr)", // 80em+
      }}
      gap={6}
      w="85%"
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default HomePage;
