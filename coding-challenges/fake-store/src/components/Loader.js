import { Spinner, Text, VStack } from "@chakra-ui/react";

const Loader = () => {
  return (
    <VStack colorPalette="teal">
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600" size="xl">
        Loading Items
      </Text>
    </VStack>
  );
};

export default Loader;
