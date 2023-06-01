import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseClient: SupabaseClient = createClient(
    String(import.meta.env["VITE_SUPABASE_URL"]) || "",
    String(import.meta.env["VITE_SUPABASE_KEY"]) || ""
);



export const fetchMessage = async () => {
    const { data, error } = await supabaseClient
        .from("secrete_message")
        .select()
        .order("created_at", { ascending: false });

    if (error) {
        console.log(error);
    }

    return !error ? data : null;
};

export const insertMessage = async (message: string) => {
    const { data, error } = await supabaseClient
        .from("secrete_message")
        .insert({ message: message });

    if (error) {
        console.log(error);
    }

    return !error ? data : null;
};
