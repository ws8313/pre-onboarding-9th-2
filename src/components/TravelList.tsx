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
  useDisclosure,
} from "@chakra-ui/react";
import { DetailModal } from "./DetailModal";

export const TravelList = ({
  travelProduct,
}: {
  travelProduct: TravelProduct;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickShowModal = (travelProduct: TravelProduct) => {
    onOpen();
  };

  const onClickReservation = (travelProduct: TravelProduct) => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const basketTemp = basket.filter(
      (product: TravelProduct) => travelProduct.idx === product.idx
    );
    if (basketTemp.length === 1) {
      alert("이미 장바구니에 담긴 상품입니다.");
      return;
    }
    const { ...newItem } = travelProduct;
    basket.push(newItem);
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  return (
    <>
      <Card mb="70px">
        <CardBody>
          <Image
            src={travelProduct.mainImage}
            alt={travelProduct.name}
            objectFit="cover"
            height="200px"
            borderRadius="lg"
            cursor="pointer"
            onClick={() => onClickShowModal(travelProduct)}
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
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            cursor="pointer"
            onClick={() => onClickReservation(travelProduct)}
          >
            예약하기
          </Button>
        </CardFooter>
      </Card>
      <DetailModal
        isOpen={isOpen}
        onClose={onClose}
        travelProduct={travelProduct}
      />
    </>
  );
};
