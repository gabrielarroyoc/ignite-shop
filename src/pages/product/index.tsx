import { useRouter } from "next/router";

export default function Products() {
  const { query } = useRouter();
  return <h1>produto: {JSON.stringify(query)}</h1>;
}
