import Photo from "../src/interfaces/Photo";

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <div className="flex max-w-xs flex-col justify-start gap-2 overflow-hidden rounded-xl bg-white/50 pb-4 text-slate-800 shadow-md hover:bg-white/20">
      <div className="relative h-32 max-h-32 bg-[#fcd4e1]">
        <img src={photo.url} className="absolute w-full h-full object-cover" alt="" />
      </div>
      <h3 className="px-4 text-xl font-bold line-clamp-2">{photo.title}</h3>
      <div className="px-4 text-sm line-clamp-3">Album ID: {photo.albumId}</div>
    </div>
  );
}
