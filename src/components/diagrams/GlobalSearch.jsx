import { useDiagramReveal } from "../../hooks/useDiagramReveal";

export default function GlobalSearch() {
  const ref = useDiagramReveal();

  return (
    <svg
      ref={ref}
      viewBox="0 0 1000 268"
      width="100%"
      className="block h-auto"
      role="img"
      aria-label="Global Search architecture: AngularJS modules and a React island sharing one search contract over .NET and MS SQL"
    >
      <g fontFamily="Lora, serif" fontSize="9.5" letterSpacing="1.1" fill="#7d7979">
        <text x="0" y="12">LEGACY SHELL · ANGULARJS</text>
        <text x="632" y="12">REACT ISLAND</text>
        <text x="20" y="230">1,000s OF DAILY USERS, APAC</text>
        <text x="340" y="230">ONE QUERY SHAPE, EVERY MODULE</text>
        <text x="652" y="230">ANY RECORD, ONE KEYSTROKE</text>
        <text x="340" y="258">MIGRATION PATH — MODULE BY MODULE, NO FREEZE</text>
      </g>
      <rect x="0" y="24" width="252" height="182" rx="3" fill="none" stroke="#bab6b6" strokeDasharray="3 4" />
      <rect x="632" y="24" width="240" height="182" rx="3" fill="none" stroke="#605d5d" />
      <g fill="none" stroke="#605d5d">
        <rect x="20" y="44" width="212" height="38" rx="3" />
        <rect x="20" y="94" width="212" height="38" rx="3" />
        <rect x="20" y="144" width="212" height="38" rx="3" />
        <rect x="340" y="66" width="190" height="44" rx="3" />
        <rect x="340" y="142" width="190" height="44" rx="3" />
        <rect x="652" y="52" width="200" height="42" rx="3" />
        <rect x="652" y="112" width="200" height="34" rx="3" />
        <rect x="652" y="156" width="200" height="34" rx="3" />
      </g>
      <g fontFamily="Lora, serif" fontSize="12" fill="#444141" textAnchor="middle">
        <text x="126" y="67">Tenancy</text>
        <text x="126" y="117">Owner</text>
        <text x="126" y="167">Property</text>
        <text x="435" y="84">Search contract</text>
        <text x="435" y="160">.NET · MS SQL</text>
        <text x="752" y="70">Global Search UI</text>
        <text x="752" y="134">Tenancy result</text>
        <text x="752" y="178">Owner result</text>
      </g>
      <g fontFamily="Lora, serif" fontSize="9.5" letterSpacing="1.1" fill="#9b9797" textAnchor="middle">
        <text x="435" y="99">SINGLE ENDPOINT</text>
        <text x="435" y="175">INDEXED READS</text>
        <text x="752" y="86">REACT ON AZURE</text>
      </g>
      <g fill="none" stroke="#b68235">
        <path data-edge="1" d="M232 63 H286 V88 H340" />
        <path data-edge="1" d="M232 113 H286 V88 H340" />
        <path data-edge="1" d="M232 163 H286 V164 H340" />
        <path data-edge="1" d="M435 110 V142" />
        <path data-edge="1" d="M530 88 H590 V73 H652" />
        <path data-edge="1" d="M530 164 H590 V129 H652" />
        <path data-edge="1" d="M872 173 H920 V38 H540" strokeDasharray="4 4" />
      </g>
    </svg>
  );
}
