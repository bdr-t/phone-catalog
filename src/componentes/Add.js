import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Stack,
  Box,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { useRef } from "react";

const Add = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add new phone</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Name of Phone</FormLabel>
                <Input

                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">manufacturer</FormLabel>
                <Input

                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Price</FormLabel>
                <Input

                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Link of image</FormLabel>
                <Input

                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Processor</FormLabel>
                <Input

                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Ram</FormLabel>
                <Input

                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Color</FormLabel>
                <Input

                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>

              

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Add;
