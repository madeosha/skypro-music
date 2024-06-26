import { getTracks } from "../api/tracksApi";
import { Main } from "../components/Main/Main";
import { Track } from "../components/Main/Main.types";

export default async function Home() {
  const tracks: Track[] = await getTracks();

  return <Main tracks={tracks} />;
}
