import { Center, Link, Text } from "@chakra-ui/react";

const Footer = (): JSX.Element => {
    return (
        <>
            <Center my={4}>
                <Text textAlign={"center"} fontSize={"xs"}>
                    Made by Bimo. <br />
                    @2023 Bimo. Source code{" "}
                    <Link
                        href='https://github.com/bimodwilaksono/secrete-message'
                        color={"blue.400"}
                        isExternal>
                        here.
                    </Link>
                </Text>
                <Text textAlign={"center"} fontSize={"xs"}></Text>
            </Center>
        </>
    );
};

export default Footer;
