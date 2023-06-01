import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const MessageCard = (): JSX.Element => {
    const bgColor = useColorModeValue("gray.50", "gray.700");

    return (
        <>
            <Box w={"full"} p={4} backgroundColor={bgColor} my={4} borderRadius={'xl'}>
                <Stack direction={"column"}>
                    <Text fontStyle={'italic'}>message content</Text>
                    <Text fontSize={'xs'} textColor={'gray.500'}>2023/02/06 time</Text>
                </Stack>
            </Box>
        </>
    );
};

export default MessageCard;
