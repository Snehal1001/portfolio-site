import { useDiagramReveal } from "../../hooks/useDiagramReveal";

export default function CentralizedATS() {
  const ref = useDiagramReveal();

  return (
    <svg
      ref={ref}
      viewBox="0 0 1000 226"
      width="100%"
      className="block h-auto"
      role="img"
      aria-label="ATS architecture: three office databases feeding Azure Function Apps, which sync MS SQL Server and CosmosDB behind an MSAL-authenticated admin portal"
    >
      <g fontFamily="Lora, serif" fontSize="9.5" letterSpacing="1.1" fill="#7d7979">
        <text x="0" y="12">DISTRIBUTED OFFICES</text>
        <text x="0" y="204">NO SHARED VIEW</text>
        <text x="272" y="204">CHANGE EVENTS, NOT POLLING</text>
        <text x="556" y="204">RECORD + PROJECTIONS</text>
        <text x="824" y="204">ONE REAL-TIME TRUTH</text>
      </g>
      <g fill="none" stroke="#605d5d">
        <rect x="0" y="26" width="176" height="40" rx="3" />
        <rect x="0" y="80" width="176" height="40" rx="3" />
        <rect x="0" y="134" width="176" height="40" rx="3" />
        <rect x="272" y="72" width="196" height="56" rx="3" />
        <rect x="556" y="26" width="176" height="44" rx="3" />
        <rect x="556" y="130" width="176" height="44" rx="3" />
        <rect x="824" y="72" width="176" height="56" rx="3" />
      </g>
      <g fontFamily="Lora, serif" fontSize="12" fill="#444141" textAnchor="middle">
        <text x="88" y="43">Office DB — A</text>
        <text x="88" y="97">Office DB — B</text>
        <text x="88" y="151">Office DB — C</text>
        <text x="370" y="96">Azure Function Apps</text>
        <text x="644" y="46">MS SQL Server</text>
        <text x="644" y="150">CosmosDB</text>
        <text x="912" y="96">Admin portal</text>
      </g>
      <g fontFamily="Lora, serif" fontSize="9.5" letterSpacing="1.1" fill="#9b9797" textAnchor="middle">
        <text x="88" y="58">SQL SERVER</text>
        <text x="88" y="112">SQL SERVER</text>
        <text x="88" y="166">SQL SERVER</text>
        <text x="370" y="112">EVENT-DRIVEN PIPELINE</text>
        <text x="644" y="61">SYSTEM OF RECORD</text>
        <text x="644" y="165">READ PROJECTIONS</text>
        <text x="912" y="112">MSAL / JWT</text>
      </g>
      <g fill="none" stroke="#b68235">
        <path data-edge="1" d="M176 46 H224 V88 H272" />
        <path data-edge="1" d="M176 100 H224 V100 H272" />
        <path data-edge="1" d="M176 154 H224 V112 H272" />
        <path data-edge="1" d="M468 90 H512 V48 H556" />
        <path data-edge="1" d="M468 110 H512 V152 H556" />
        <path data-edge="1" d="M732 48 H778 V90 H824" />
        <path data-edge="1" d="M732 152 H778 V110 H824" />
      </g>
    </svg>
  );
}
