import Logo from "./components/logo";
import SeacrhBoX from "./components/SearchBox";
import SearchOptions from "./components/SearchOptions";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Logo />
      <SeacrhBoX />
      <SearchOptions />
    </main>
  );
}
