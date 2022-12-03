import Link from "next/link";

export default function Nav({ title }: { title?: string }) {
  return (
    <header className="p-5 container mx-auto">
      <nav className="flex flex-wrap justify-between">
        <div className="flex align-middle justify-between sm:justify-start w-full sm:w-auto fixed left-0 top-0 p-4 sm:p-0 bg-white sm:static z-10">
          <Link href="/" className="">
            <h1 className="text-3xl font-extrabold text-slate-800 sm:text-[3rem]">
              Ralken FrontEnd
            </h1>
          </Link>
          <Link
            href="/logs"
            className="flex items-center rounded bg-green-800 p-1 px-3 ml-2 sm:ml-5"
          >
            <h4 className=" font-bold text-slate-100 sm:text-[1.5rem]">
              Logs
            </h4>
          </Link>
        </div>
        <h2 className="text-2xl sm:text-3xl text-slate-800 w-full sm:w-auto text-left sm:text-right mt-12 sm:mt-0">{title}</h2>
      </nav>
    </header>
  );
}
