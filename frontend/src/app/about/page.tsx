'use server'

export default async function Home() {
  const response = await fetch("http://localhost:8080/api", {cache: "no-store"})
  .then((res) => res.json()).then(({data}) => data)
  .catch((err) => "Could not retrieve data");

  return (
    <div>
      <h1 className="text-center mt-4 font-bold text-4xl ">About</h1>
      <h1 className="text-center mt-4">{response}</h1>
    </div>
  );
}
