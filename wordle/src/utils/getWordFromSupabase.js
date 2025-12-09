import { supabase } from "./supabaseClient";

export async function loadTodayWord() {
  const { data, error } = await supabase.rpc("gettodayword"); //El query no reconoce el camelCase y toca todo en minuscula

  if (error) {
    console.error("Error al obtener palabra del día:", error);
    return;
  }

  return data;
}
