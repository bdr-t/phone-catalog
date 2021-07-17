import {
  Center,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Center>
      <InputGroup w={{
        sm: "200px",
        md: "300px",
        lg: "400px",
        xl: "500px",
        "2xl": "600px", // 80em+
      }} m="10">
        <InputRightElement
          pointerEvents="none"
          children={
            <IconButton
              colorScheme="blue"
              aria-label="Search phone"
              icon={<SearchIcon />}
            />
          }
        />
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>
    </Center>
  );
};

export default SearchBar;
