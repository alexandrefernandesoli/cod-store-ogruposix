"use client";

export default function VideoFrame({ youtubeUrl }: { youtubeUrl: string }) {
  return (
    <iframe
      id="youtube-video"
      className="sm:w-[560px] sm:h-[315px]"
      src={youtubeUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
