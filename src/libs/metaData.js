export async function fetchMetaData(slug) {
  const response = await fetch(`https://api.example.com/pages/${slug}`);
  if (!response.ok) throw new Error("Failed to fetch data");
  const data = await response.json();
  return data; // Assuming it contains title and description
}
