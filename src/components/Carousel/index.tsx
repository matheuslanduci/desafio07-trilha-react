import { useState } from "react";
import { Box, Container, Heading, Image, Link } from "@chakra-ui/react";
import SwiperCore, { Controller, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import NextLink from "next/link";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import type { ContinentProps } from "../../../types";

type CarouselItemProps = ContinentProps;

interface CarouselProps {
  items: CarouselItemProps[];
}

SwiperCore.use([Controller, Navigation, Pagination]);

export function Carousel({ items }: CarouselProps) {
  const [slide, setSlide] = useState<SwiperCore | undefined>(undefined);

  return (
    <Container maxW={["100%", "container.xl"]} p={["0", "auto"]}>
      <Swiper
        controller={{
          control: slide
        }}
        navigation
        pagination={{
          clickable: true
        }}
        onSwiper={setSlide}
        spaceBetween={50}
        slidesPerView={1}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <NextLink href={item.path} passHref>
              <Box
                w="100%"
                height={["250px", "450px"]}
                as={Link}
                display="block"
                position="relative"
              >
                <Image
                  src={`continents/${item.bg}`}
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  height="100%"
                  objectFit="cover"
                  zIndex="0"
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  zIndex="1"
                  w="100%"
                  height="100%"
                  bg="rgba(28, 20, 1, 0.35)"
                />
                <Box
                  position="absolute"
                  top="0"
                  pt={["90px", "180px"]}
                  w="100%"
                  height="100%"
                  zIndex="2"
                  textAlign="center"
                >
                  <Heading
                    fontSize={["24px", "48px"]}
                    lineHeight={["36px", "72px"]}
                    color="light.700"
                  >
                    {item.title}
                  </Heading>
                  <Heading
                    mt={["12px", "16px"]}
                    fontSize={["14px", "24px"]}
                    lineHeight={["21px", "36px"]}
                    color="light.300"
                  >
                    {item.description}
                  </Heading>
                </Box>
              </Box>
            </NextLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
