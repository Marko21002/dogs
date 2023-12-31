"use server";
export default async function fetchData() {
  const response = await fetch(
    "https://dog.ceo/api/breeds/image/random?timestamp=" + Date.now()
  );
  const result = await response.json();
  return result;
}
