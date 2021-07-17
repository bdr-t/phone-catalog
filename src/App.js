import HomePage from "./componentes/HomePage";
import Add from "./componentes/Add"
import SearchBar from "./componentes/SearchBar";
import {
  Center,
} from "@chakra-ui/react";


function App() {
  return (
    <>
      <SearchBar/>
      <Add/>
      <Center>
        <HomePage />
      </Center>
    </>
  );
}

export default App;
