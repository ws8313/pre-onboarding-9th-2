import travelProducts from "../../data/travelProducts";
import TravelProduct from "../../types/TravelProduct";
import { TravelList } from "../../components/TravelList";
import { Button, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const products: TravelProduct[] = travelProducts;

  const navigate = useNavigate();

  return (
    <Container>
      <Flex justifyContent="center">
        <Heading marginBottom={70}>여행 상품</Heading>
      </Flex>

      <Button cursor="pointer" onClick={() => navigate("/reservations")}>
        장바구니
      </Button>

      <Grid mt={30} templateColumns={"repeat(2, 1fr)"} gap={4}>
        {products.map((el, idx) => {
          return <TravelList key={idx} travelProduct={el} />;
        })}
      </Grid>
    </Container>
  );
};
