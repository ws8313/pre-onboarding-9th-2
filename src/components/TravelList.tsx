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
    console.log(travelProduct);
    onOpen();
  };

  const onClickReservation = () => {};

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
            onClick={() => onClickReservation()}
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
