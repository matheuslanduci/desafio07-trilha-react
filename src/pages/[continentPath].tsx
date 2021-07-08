import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  Image,
  Grid,
  Tooltip
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import { City } from "../components/City";

import db from "../../data/db.json";

import { delay } from "../../utils/delay";

import { CityProps, ContinentProps } from "../../types";

interface ContinentPageProps {
  cities: CityProps[];
  continent: ContinentProps;
}

export default function Continent({ cities, continent }: ContinentPageProps) {
  return (
    <Box>
      <Box
        bg={`url("continents/${continent.bg}")`}
        bgRepeat="no-repeat"
        bgSize="cover"
        h={["150", "500"]}
        mt="100"
      >
        <Container
          maxW="container.xl"
          h="100%"
          pt={["0", "368px"]}
          display="flex"
          alignItems={["center", "normal"]}
          justifyContent={["center", "normal"]}
        >
          <Heading
            color="light.700"
            fontSize={["28px", "48px"]}
            fontWeight={["semibold", "bold"]}
          >
            {continent.title}
          </Heading>
        </Container>
      </Box>

      <Box mt="80px">
        <Container
          maxW="container.xl"
          display="flex"
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            w={{ base: "100%", lg: "600px" }}
            textAlign="justify"
            fontSize="24px"
            lineHeight="36px"
          >
            {continent.about}
          </Text>
          <Flex
            ml={{ base: 0, lg: "70px" }}
            mt={{ base: "40px", lg: 0 }}
            w={{ base: "100%", lg: "auto" }}
            flexGrow={{ base: 0, lg: 1 }}
            align="center"
            justify="space-between"
          >
            <Flex direction="column" align="center">
              <Heading fontSize="48" color="highlight.500">
                {continent.totalCountries}
              </Heading>
              <Text fontWeight="semibold" fontSize="24px">
                países
              </Text>
            </Flex>
            <Flex direction="column" align="center">
              <Heading fontSize="48" color="highlight.500">
                {continent.totalLanguages}
              </Heading>
              <Text fontWeight="semibold" fontSize="24px">
                línguas
              </Text>
            </Flex>
            <Flex direction="column" align="center">
              <Heading fontSize="48" color="highlight.500">
                {cities.length}
              </Heading>
              <Text
                fontWeight="semibold"
                fontSize="24px"
                display="flex"
                alignItems="center"
              >
                cidades +100{" "}
                <Tooltip
                  bg="dark.500"
                  label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo."
                >
                  <Image src="Info.svg" ml="5px" />
                </Tooltip>
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box my="80px">
        <Container maxW="container.xl">
          <Text mb="40px" fontSize="36px" fontWeight="medium">
            Cidades +100
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)"
            }}
            autoRows="279px"
            gap="45px"
          >
            {cities.map(city => (
              <City key={city.id} city={city} />
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<ContinentPageProps> =
  async ({ params }) => {
    const { continentPath } = params!;
    const continent = db.continents.find(
      continent => continent.path === continentPath
    );

    if (!continent) {
      return {
        notFound: true,
        redirect: {
          destination: "/",
          permanent: false
        }
      };
    }

    const cities = db.cities.filter(city => city.continentId === continent.id);

    // Simulate an API request.
    await delay(1200);

    return {
      props: {
        cities,
        continent
      }
    };
  };
