import supabase from "./supabase";

export async function getOptions() {
  const { data: option, error } = await supabase
    .from("options")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Options could not be loaded");
  }

  return option;
}

export async function deleteOption(id) {
  const { data, error } = await supabase.from("options").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Option could not be deleted");
  }

  return data;
}

export async function createOption(option) {
  const { data, error } = await supabase
    .from("options")
    .insert([option])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  return data;
}
