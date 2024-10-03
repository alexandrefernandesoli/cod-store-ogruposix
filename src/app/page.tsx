import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import VideoFrame from "@/components/VideoFrame";
import { fetchData } from "@/lib/api";
import { extractYouTubeID } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export default async function Home() {
  const sampleData = await fetchData();

  if (!sampleData || !sampleData.video_url) {
    return (
      <div className="flex items-center justify-center p-12 min-w-screen min-h-screen">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <h1 className="text-xl sm:text-3xl font-bold text-center sm:text-left">
            Erro ao carregar os dados
          </h1>
          <p className="text-lg text-center sm:text-left">
            Por favor, verifique se a API está rodando e retornando os dados
            esperados.
          </p>
        </main>
      </div>
    );
  }

  const youtubeVideoID = extractYouTubeID(sampleData.video_url);
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoID}`;

  return (
    <>
      <Header />
      <div className="flex items-center justify-center p-8 min-w-screen min-h-screen">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <h1 className="text-xl sm:text-3xl font-bold text-center">
            {sampleData.video_headline}
          </h1>
          <VideoFrame youtubeUrl={youtubeUrl} />
          <p className="text-lg text-center sm:text-left">
            {sampleData.video_sub_headline}
          </p>

          <div id="products" className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {sampleData.products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
