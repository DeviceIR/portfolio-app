import { useMoveBack } from "../utils/useMoveBack";
import Heading from "../components/ui/Heading";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-gray-50 flex items-center justify-center p-12">
      <div className="bg-[var(--color-bg)] text-[var(--color-text)] border border-gray-200 rounded-md p-12 max-w-[96rem] w-full text-center">
        <Heading>The page you are looking for could not be found 😢</Heading>
        <button
          onClick={moveBack}
          className="px-6 py-3rounded-md hover:bg-[var(--color-highlight)] transition-colors mt-10"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
