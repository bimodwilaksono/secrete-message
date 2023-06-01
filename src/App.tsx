import { Container, Text, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MessageForm from "./components/MessageForm";
import MessageCard from "./components/MessageCard";

function App() {
    const bgColor = useColorModeValue("gray.50", "gray.700");

    return (
        <>
            <Container maxW={"container.lg"} my={4}>
                <Navbar />
                <Text
                    backgroundColor={bgColor}
                    textAlign={"center"}
                    py={8}
                    rounded={"xl"}
                    w={"full"}
                    fontSize={"md"}
                    fontStyle={"italic"}>
                    Tell something
                </Text>
                <MessageForm />
                {Array.from({ length: 10 }, (v, i) => (
                    <MessageCard />
                ))}
                <Footer />
            </Container>
        </>
    );
}

export default App;
