import { Text, Image, Flex, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  image: string;
  text: string;
}

export function TravelType({ image, text }: TravelTypeProps) {
  const source = useBreakpointValue({ base: "Circle.svg", md: image });

  return (
    <Flex
      direction={{ base: "row", md: "column" }}
      align="center"
      mt={{ base: "6px", md: "0" }}
    >
      <Image src={source} />
      <Text
        mt={{ base: "0", md: "16px" }}
        ml={{ base: "8px", md: "0" }}
        fontWeight="semibold"
        fontSize="24px"
        textTransform="lowercase"
      >
        {text}
      </Text>
    </Flex>
  );
}
