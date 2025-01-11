import {
  Box,
  Flex,
  Input,
  Button,
  Heading,
  Icon,
  HStack,
  Text,
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  return (
    <Box h={24} bgColor="" w="100%">
      <Flex
        alignItems="center"
        h="100%"
        w="100%"
        justifyContent="space-between"
      >
        <Box>
          <Heading>Fake Store</Heading>
        </Box>
        <Flex gap={3} w="60% " alignItems="center">
          <Input placeholder="search items" h={14} />
          <Button colorScheme="orange">Search</Button>
        </Flex>
        <HStack spacing={8}>
          <HStack>
            <Text>Account</Text>
            <Icon as={VscAccount} h={6} w={6} />
            <Icon as={FaChevronDown} w={6} h={6} />
          </HStack>
          <HStack>
            <Text>Help</Text>
            <Icon as={VscAccount} h={6} w={6} />
            <Icon as={FaChevronDown} w={6} h={6} />
          </HStack>
          <HStack>
            <Text>Cart</Text>
            <Icon as={VscAccount} h={6} w={6} />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
