import { Box, Container, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MessageForm from "./components/MessageForm";
import MessageCard from "./components/MessageCard";
import useMessageQuery from "./api/useMessageQuery";

function App() {
    const bgColor = useColorModeValue("gray.50", "gray.700");
    const { data, isFetching } = useMessageQuery();

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
                    fontStyle={"italic"}
                    my={4}>
                    Tell something
                </Text>
                <MessageForm />
                {isFetching ? (
                    <Box w={'full'} my={4} textAlign={'center'}>
                        <Spinner />
                    </Box>
                ) : (
                    data?.map((el) => {
                        return (
                            <MessageCard key={el?.id} message={el?.message} time={el?.created_at} />
                        );
                    })
                )}
                <Footer />
            </Container>
        </>
    );
}

export default App;
