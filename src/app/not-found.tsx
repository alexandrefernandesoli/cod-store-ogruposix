import Link from "next/link";

export const metadata = {
  title: "404 - Página Não Encontrada",
};

export default function Custom404() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-24 p-4">
        <div className="text-center w-full">
          <h1 className="text-7xl font-bold from-blue-600 to-teal-400 bg-gradient-to-r bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-xl md:text-4xl font-semibold text-stone-800 dark:text-stone-400 mt-4">
            Ops! Esta página não foi encontrada.
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="/"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        >
          Voltar à página inicial
        </Link>
      </div>
    </>
  );
}
