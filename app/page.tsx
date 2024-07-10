import Logo from './components/logo'
import SearchBox from './components/SearchBox'
import SearchOptions from './components/SearchOptions'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Logo />
      <div className="w-full max-w-2xl">
        <SearchBox />
        <SearchOptions />
      </div>
    </main>
  );
}