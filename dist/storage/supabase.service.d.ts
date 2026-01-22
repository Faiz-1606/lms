import { SupabaseClient } from '@supabase/supabase-js';
export declare class SupabaseService {
    private supabase;
    constructor();
    getClient(): SupabaseClient<any, "public", "public", any, any>;
}
