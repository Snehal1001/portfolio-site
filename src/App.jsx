import MarginIndex from "./components/MarginIndex";
import Colophon from "./components/Colophon";
import Statement from "./components/Statement";
import Record from "./components/Record";
import Plates from "./components/Plates";
import Apparatus from "./components/Apparatus";
import Correspondence from "./components/Correspondence";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <MarginIndex />
      <main className="pt-[52px] lg:ml-[214px] lg:pt-0">
        <Colophon />
        <Statement />
        <Record />
        <Plates />
        <Apparatus />
        <Correspondence />
      </main>
    </div>
  );
}
