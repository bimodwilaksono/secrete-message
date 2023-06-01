import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertMessage } from "../lib/supabaseClient";

const useMessageMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(insertMessage, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['messageQuery'] });
        },
    });
};

export default useMessageMutation;
