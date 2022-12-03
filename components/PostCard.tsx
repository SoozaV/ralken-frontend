import Image from "next/image";
import type Post from "../src/interfaces/Post";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex max-w-xs flex-col justify-start gap-2 overflow-hidden rounded-xl bg-white/50 pb-4 text-slate-800 shadow-md hover:bg-white/20">
      <div className="relative h-32 max-h-32 bg-[#fcd4e1]">
        <Image src={`https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`} fill alt="" />
      </div>
      <h3 className="px-4 text-xl font-bold line-clamp-2">{post.title}</h3>
      <div className="px-4 text-sm line-clamp-3">{post.body}</div>
    </div>
  );
}
