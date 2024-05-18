import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gzgkrufshibppapsnrqh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6Z2tydWZzaGlicHBhcHNucnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2NDA4MjQsImV4cCI6MjAxNjIxNjgyNH0.oFunm0eyMMOier6EPeJrNrXcALrM4WfqtmWj_bAlvOM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
