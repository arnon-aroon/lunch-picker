import { TodayLunchView } from "@/components/today-lunch-view";
import { getAllSpots } from "@/lib/spots";

export const dynamic = "force-dynamic";

export default async function Home() {
  const spots = await getAllSpots();

  return <TodayLunchView spots={spots} />;
}
