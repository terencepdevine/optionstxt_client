import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ktdujrdszmhrztvwggqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZHVqcmRzem1ocnp0dndnZ3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MzcwNDcsImV4cCI6MjAyNzIxMzA0N30.xJ1Bxi38LzFHt3g21a3vit0MYg8sJVRpmbdK63NGmkE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
