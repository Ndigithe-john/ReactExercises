import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  return (
    <Box mx="auto" maxWidth="1200px">
      <Header />
      <ProductsContainer />
    </Box>
  );
}

export default App;
