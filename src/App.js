import HomePage from "./componentes/HomePage";
import Add from "./componentes/Add";
import SearchBar from "./componentes/SearchBar";
import { Center, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
        <Flex justify="center" align="center">
          <SearchBar />
          <Add />
        </Flex>

      <Center justify="center">
        <HomePage />
      </Center>
    </>
  );
}

export default App;
