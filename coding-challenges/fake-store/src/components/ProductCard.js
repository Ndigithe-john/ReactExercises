import {
  Card,
  Text,
  Image,
  CardBody,
  Heading,
  Stack,
  Divider,
  CardFooter,
  HStack,
} from "@chakra-ui/react";

function ProductCard({ product }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={product.image} alt={product.title} borderRadius="lg" />
        <Stack mt={6} spacing={3}>
          <Heading size="md">{product.title}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            $ {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack spacing={32}>
          <Text>Rating: {product.rating.rate}</Text>
          <Text>Count: {product.rating.count}</Text>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
