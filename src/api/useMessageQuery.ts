import { useQuery } from "@tanstack/react-query";
import { fetchMessage } from "../lib/supabaseClient";

const useMessageQuery = () => {
  return useQuery(['messageQuery'], fetchMessage)
};

export default useMessageQuery;