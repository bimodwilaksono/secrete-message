import { Box, Flex, IconButton, Spacer, Text, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box h={16} w={"full"} mb={4}>
                <Flex alignContent={'center'} alignSelf={'center'}>
                    <Box>
                        <Text fontSize={"xl"} fontWeight={"bold"}>
                            Secrete Message
                        </Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <IconButton
                            aria-label='toggleColor'
                            onClick={toggleColorMode}
                            rounded={"full"}
                            icon={colorMode == "light" ? <FaMoon /> : <FaSun />}
                        />
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Navbar;
