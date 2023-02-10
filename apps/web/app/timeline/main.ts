export default async function fetchTimelineData({ num }: { num: number }) {
  const res = await fetch(`https://dummyjson.com/products?limit=${num}`);
  const products = await res.json();
  return products;
}
