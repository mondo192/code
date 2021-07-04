import axios from "axios";

export async function probe(url: string) {
  try {
    const result = await axios.head(url);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}
