import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useMessageMutation from "../api/useMessageMutation";

const MessageForm = (): JSX.Element => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();
    const { mutate } = useMessageMutation();

    function onSubmit(values: any) {
        mutate(values?.message);
    }

    return (
        <>
            <Box w={"full"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={Boolean(errors.message)}>
                        <FormLabel htmlFor='message'>Message : </FormLabel>
                        <Textarea
                            id='message'
                            placeholder='Enter your message...'
                            {...register("message", {
                                required: "This is required",
                                minLength: { value: 4, message: "Minimum length should be 4" },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.message && errors.message.message?.toString()}
                        </FormErrorMessage>
                    </FormControl>
                    <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                        Send
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default MessageForm;
