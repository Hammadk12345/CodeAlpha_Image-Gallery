import React, { useState } from "react";
import { Image, Box, Flex, Heading, Switch, useColorMode, Text, Spacer } from "@chakra-ui/react";
import { images } from "./Images";

function App() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const { colorMode, toggleColorMode } = useColorMode(); 

  return (
    // main box
    <Box
      bg={colorMode === "dark" ? "#121212" : "gray.100"} 
      color={colorMode === "dark" ? "white" : "black"} 
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      {/* Heading and Theme switch */}
      <Flex width="100%" maxW="1200px" align="center" justify="center" position="relative" mb={6}>
        <Heading as="h1" size="4xl" py={6} textAlign="center">
          Image Gallery
        </Heading>
        <Box position="absolute" right="0">
          <Flex align="center" gap={2}>
            <Text fontSize="lg">{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
            <Switch size="lg" colorScheme="yellow" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
          </Flex>
        </Box>
      </Flex>

      {/* Selected Image Preview */}
      <Box
        mb={6}
        borderRadius="20px"
        overflow="hidden"
        boxShadow="lg"
        width="400px"
        height="500px"
      >
        <Image src={selectedImage} alt="Selected" width="100%" height="100%" objectFit="cover" />
      </Box>

      {/* Thumbnails */}
      <Box
        overflowX="auto"
        maxW="80vw"
        p={2}
        sx={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Flex gap={4} flexWrap="nowrap">
          {images.map((img, index) => (
            <Box
              key={index}
              cursor="pointer"
              borderRadius="15px"
              overflow="hidden"
              minWidth="70px"
              boxShadow={selectedImage === img ? "0 0 10px rgba(255, 255, 255, 0.8)" : "none"}
              transition="0.3s"
              onClick={() => setSelectedImage(img)}
            >
              <Image src={img} alt={`Thumbnail ${index}`} boxSize="70px" objectFit="cover" />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
