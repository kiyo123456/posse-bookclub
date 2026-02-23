import { createClient } from "@supabase/supabase-js";
require('dotenv').config();

const SUPABASE_PROJECT_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}`
const SUPABASE_API_KEY = `${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY}`

const supabase = createClient(SUPABASE_PROJECT_URL,SUPABASE_API_KEY)

export default supabase