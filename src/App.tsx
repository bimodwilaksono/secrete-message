import { Container, Text, useColorModeValue } from "@chakra-ui/react";

function App() {
    const bgColor = useColorModeValue("gray.50", "gray.700");

    return (
        <>
            <Container maxW={"container.lg"} my={4}>
              <Text>Hello</Text>
            </Container>
        </>
    );
}

export default App;
