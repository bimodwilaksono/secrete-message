import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

type MessageCardProps = {
    message: string;
    time: string;
};

const MessageCard = ({ message, time }: MessageCardProps): JSX.Element => {
    const bgColor = useColorModeValue("gray.50", "gray.700");

    return (
        <>
            <Box w={"full"} p={4} backgroundColor={bgColor} my={4} borderRadius={"xl"}>
                <Stack direction={"column"}>
                    <Text fontStyle={"italic"}>{message}</Text>
                    <Text fontSize={"xs"} textColor={"gray.500"}>
                        {new Date(time).toLocaleString()}
                    </Text>
                </Stack>
            </Box>
        </>
    );
};

export default MessageCard;
