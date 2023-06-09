import HomePage from "@/components/HomePage";
import { supabase } from "@/lib/supabase";
import { Metadata } from "next";

export const revalidate = 1;

export const metadata = {
  title: "Debate Tube | Watch AIs Debate each-other",
  description: "Watch AIs debating each other on controversial topics.",
} as Metadata;

export default async function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
