import Head from "next/head";
import Nav from "./Nav";

export default function UserLayout({
  children,
  title = "Notes App",
}: {
  children: any;
  title?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col bg-gradient-to-br from-white via-stone-100 to-slate-200">
        <Nav title="Users" />
        <main className="flex grow bg-gradient-to-b from-[#eae9eb] to-[#cfcfcf]">
          {children}
        </main>
      </div>
    </>
  );
}