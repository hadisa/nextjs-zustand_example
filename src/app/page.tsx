import Show from "@/component/Show";
import UserTable from "@/component/UserTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserTable />
      <h1 className="mt-10 text-3xl font-bold">
        Use Zustand instead of Context
      </h1>
      <Show />
    </main>
  );
}
