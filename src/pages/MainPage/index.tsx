import travelProducts from "../../data/travelProducts";
import TravelProduct from "../../types/TravelProduct";
import { TravelList } from "../../components/TravelList";
import { Container, Flex, Grid, Heading } from "@chakra-ui/react";

export const MainPage = () => {
  const products: TravelProduct[] = travelProducts;

  return (
    <Container>
      <Flex justifyContent="center">
        <Heading marginBottom={70}>여행 상품</Heading>
      </Flex>

      <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
        {products.map((el, idx) => {
          return <TravelList key={idx} travelProduct={el} />;
        })}
      </Grid>
    </Container>
  );
};
