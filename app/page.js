import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard"); // Navigate to the dashboard page
}
