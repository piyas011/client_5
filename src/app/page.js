import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl"> Hello World</h1>
      <Link
        className="px-5 py-2 text-2xl border rounded-[10px] my-2"
        href="/users"
      >
        All Users
      </Link>
      <Link
        className="px-5 py-2 text-2xl border rounded-[10px]"
        href="/users/create-user"
      >
        Create New User
      </Link>
    </div>
  );
}
