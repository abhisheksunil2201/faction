import { redirect } from "next/navigation";

export default function Home() {
  redirect("/channels/me");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-3xl font-bold">Welcome to Faction</h1>
    </div>
  );
}
