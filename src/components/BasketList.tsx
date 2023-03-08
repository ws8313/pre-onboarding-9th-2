import TravelProduct from "../types/TravelProduct";
import {
  Stack,
  Image,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  Divider,
  CardFooter,
} from "@chakra-ui/react";

export const BasketList = ({
  travelProduct,
}: {
  travelProduct: TravelProduct;
}) => {
  return (
    <>
      <Card flexDirection="row" mb="70px">
        <Image
          src={travelProduct.mainImage}
          alt={travelProduct.name}
          objectFit="cover"
          height="200px"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" my={2}>
            {travelProduct.name}
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            {travelProduct.price.toLocaleString()}원
          </Text>
          <Text fontSize="md">{travelProduct.spaceCategory}</Text>
        </Stack>
        <Button variant="solid" colorScheme="blue" cursor="pointer">
          삭제
        </Button>
      </Card>
    </>
  );
};
