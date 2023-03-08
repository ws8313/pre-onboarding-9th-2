import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import TravelProduct from "../types/TravelProduct";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  travelProduct: TravelProduct;
}

export const DetailModal = ({
  isOpen,
  onClose,
  travelProduct,
}: DetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={300} bgColor="white">
        <ModalHeader>{travelProduct.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" justifyItems="center">
          <Image
            src={travelProduct.mainImage}
            alt={travelProduct.name}
            borderRadius="lg"
            mb={30}
          />
          <Text fontSize="lg" fontWeight="bold">
            지역
          </Text>
          <Text mb={1}>{travelProduct.spaceCategory}</Text>
          <Text fontSize="lg" fontWeight="bold">
            설명
          </Text>
          <Text mb={1}>{travelProduct.description}</Text>
          <Text fontSize="lg" fontWeight="bold">
            가격
          </Text>
          <Text mb={1}>{travelProduct.price.toLocaleString("kr")}원</Text>
          <Text fontSize="lg" fontWeight="bold">
            최대거래수량
          </Text>
          <Text mb={1}>{travelProduct.maximumPurchases}장</Text>
          <Text fontSize="lg" fontWeight="bold">
            등록일자
          </Text>
          <Text mb={1}>{travelProduct.registrationDate}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
