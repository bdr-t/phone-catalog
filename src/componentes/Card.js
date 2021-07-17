import "./Card.css";
import {
  Image,
  Center,
  VStack,
  Heading,
  Circle,
  HStack,
  Box,
  Badge,
  Flex,
  Collapse,
  useDisclosure,
  Lorem,
  Slide,
} from "@chakra-ui/react";
// import { CgScreenShot } from "react-icons/cg";
// import { CgSmartphoneRam } from "react-icons/cg";
// import { FiCpu } from "react-icons/fi";

import {useState} from 'react'

const Card = () => {
  const [ isOpen, setIsOpen ] = useState();
  return (
    <div>
      <VStack
        onClick={()=> setIsOpen(!isOpen)}
        _hover={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          img: {
            marginTop: "-10px",
          },
        }}
        position="relative"
        bg="gray.200"
        w="220px"
        h="320px"
        mb="10"
        mt="10"
        borderRadius="base"
        pb="5"
        boxShadow="md"
      >
        <Center mt="-40px">
          <Image
            boxSize="150px"
            src="https://storage.googleapis.com/yoigo-statics/img/terminales/ImgMain_iphone12-mini-verde-main.png"
            alt="Segun Adebayo"
          />
        </Center>
        <VStack className="card" position="absolute" mt="200px">
          <Heading as="h2" size="lg" color="blue.700">
            Galaxy S21
          </Heading>
          <Badge variant="outline" fontSize="14px" color="blue.900" m="0">
            Samsung
          </Badge>
          <HStack>
            <Circle size="15px" bg="tomato" cursor="pointer"></Circle>
            <Circle size="15px" bg="lightgreen" cursor="pointer"></Circle>
            <Circle size="15px" bg="lightblue" cursor="pointer"></Circle>
            <Circle size="15px" bg="black" cursor="pointer"></Circle>
          </HStack>

          {/* <Flex>
            <CgScreenShot/>
            <p>screen</p>
          </Flex>
          <Flex>
            <CgSmartphoneRam className="icon" />
            <p>ram GB</p>
          </Flex>
          <Flex>
            <FiCpu className="icon" />
            <p>procesor</p>
          </Flex> */}

          <Heading as="h3" size="md" color="blue.900" m="0">
            900€
          </Heading>
        </VStack>
      </VStack>

      {isOpen && (
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="blue.400"
          rounded="md"
          shadow="md"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate unde quaerat cumque ipsam repudiandae illum quidem architecto esse quas animi, dolor harum. Molestias, voluptas minus quaerat quia dolores nisi quisquam!</p>
        </Box>
      </Slide>
      )}
    </div>
  );
};

export default Card;
