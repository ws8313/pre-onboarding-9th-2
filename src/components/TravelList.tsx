import TravelProduct from "../types/TravelProduct";
import {
  GridItem,
  Stack,
  Image,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

export const TravelList = ({
  travelProduct,
}: {
  travelProduct: TravelProduct;
}) => {
  return (
    <Box p={4} borderWidth="1px" alignItems="center">
      <Image
        src={travelProduct.mainImage}
        alt={travelProduct.name}
        objectFit="cover"
        height="200px"
      />
      <Heading size="md" my={2}>
        {travelProduct.name}
      </Heading>
      <Text fontSize="xl" fontWeight="bold">
        {travelProduct.price.toLocaleString()}원
      </Text>
      <Text fontSize="md">{travelProduct.spaceCategory}</Text>
      {/* <Button colorScheme="blue" size="sm" onClick={() => onBookClick()}>예약하기</Button> */}
    </Box>
  );
};
