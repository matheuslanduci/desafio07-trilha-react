import { GetStaticProps } from "next";
import {
  Box,
  Container,
  Text,
  Heading,
  Image,
  Divider
} from "@chakra-ui/react";

import { TravelType } from "../components/TravelType";
import { Carousel } from "../components/Carousel";

import db from "../../data/db.json";

import type { ContinentProps } from "../../types";

interface HomeProps {
  continents: ContinentProps[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Box>
      <Box
        bg="url('Background.png')"
        bgPosition="center"
        bgSize="cover"
        h={["163", "335"]}
        mt="100"
      >
        <Container
          maxW="container.xl"
          display="flex"
          justifyContent="space-between"
        >
          <Box pt={["28px", "70"]}>
            <Heading
              fontWeight={["medium", "bold"]}
              fontSize={["20px", "36px"]}
              color="light.700"
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text
              color="light.300"
              maxW="524"
              mt={["8px", "20px"]}
              fontSize={["14px", "20px"]}
              lineHeight={["21px", "30px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Image
            src="Airplane.svg"
            mt="76"
            display={{ base: "none", lg: "block" }}
          />
        </Container>
      </Box>

      <Box pt="80px">
        <Container
          maxW={["275px", "container.xl"]}
          display="flex"
          flexWrap={{ base: "wrap", md: "nowrap" }}
          flexBasis={1}
          justifyContent="space-between"
        >
          <TravelType image="Cocktail.svg" text="Vida noturna" />
          <TravelType image="Beach.svg" text="Praia" />
          <TravelType image="Building.svg" text="Moderno" />
          <TravelType image="Museum.svg" text="Clássico" />
          <TravelType image="Earth.svg" text="E mais..." />
        </Container>
      </Box>

      <Divider
        w="90px"
        h="2px"
        borderColor="dark.500"
        borderBottomWidth="2px"
        opacity="1"
        margin="80px auto 52px auto"
      />

      <Box>
        <Heading
          textAlign="center"
          fontSize={["20px", "36px"]}
          fontWeight="semibold"
          lineHeight={["30px", "54px"]}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Box>

      <Box my="52px">
        <Carousel items={continents} />
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const continents: ContinentProps[] = db.continents;

  return {
    props: {
      continents
    }
  };
};
