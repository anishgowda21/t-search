import { Suspense } from "react";
import SearchResults from "../components/SearchReasults";

export default function SearchPage() {
  return (
    <Suspense>
      <SearchResults />
    </Suspense>
  );
}
