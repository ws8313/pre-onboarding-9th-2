import { Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { BasketList } from "../../components/BasketList";
import TravelProduct from "../../types/TravelProduct";

export const ReservationPage = () => {
  const products: TravelProduct[] = JSON.parse(
    localStorage.getItem("basket") || "[]"
  );

  return (
    <Container>
      <Flex justifyContent="center">
        <Heading marginBottom={70}>장바구니</Heading>
      </Flex>

      <Grid mt={30} gap={4}>
        {products.map((el, idx) => {
          return <BasketList key={idx} travelProduct={el} />;
        })}
      </Grid>
    </Container>
  );
};
