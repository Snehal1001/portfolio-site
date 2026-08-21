import { useDiagramReveal } from "../../hooks/useDiagramReveal";

export default function ElectorsTreeGrid() {
  const ref = useDiagramReveal();

  return (
    <svg
      ref={ref}
      viewBox="0 0 1000 226"
      width="100%"
      className="block h-auto"
      role="img"
      aria-label="Before and after: a 1500-line component decomposed into four classes, feeding an EF Core and Angular tree-grid with paged subtrees"
    >
      <g fontFamily="Lora, serif" fontSize="9.5" letterSpacing="1.1" fill="#7d7979">
        <text x="0" y="12">BEFORE</text>
        <text x="340" y="12">AFTER — FOUR RESPONSIBILITIES</text>
        <text x="612" y="12">THE STACK</text>
        <text x="852" y="12">THE VIEW</text>
        <text x="340" y="212">GOVERNMENT-GRADE, STRICT AGILE</text>
        <text x="852" y="212">USABLE AT SCALE</text>
      </g>
      <rect x="0" y="24" width="264" height="152" rx="3" fill="none" stroke="#bab6b6" />
      <text x="132" y="92" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="40" fill="#9b9797">1,500+</text>
      <g fontFamily="Lora, serif" fontSize="9.5" letterSpacing="1.1" fill="#7d7979" textAnchor="middle">
        <text x="132" y="112">LINES, ONE COMPONENT</text>
        <text x="132" y="140">EVERY CHANGE A REGRESSION RISK</text>
      </g>
      <g fill="none" stroke="#605d5d">
        <rect x="340" y="24" width="190" height="32" rx="3" />
        <rect x="340" y="62" width="190" height="32" rx="3" />
        <rect x="340" y="100" width="190" height="32" rx="3" />
        <rect x="340" y="138" width="190" height="32" rx="3" />
        <rect x="612" y="24" width="178" height="42" rx="3" />
        <rect x="612" y="82" width="178" height="42" rx="3" />
        <rect x="612" y="140" width="178" height="42" rx="3" />
        <rect x="852" y="24" width="148" height="158" rx="3" />
      </g>
      <g fontFamily="Lora, serif" fontSize="12" fill="#444141" textAnchor="middle">
        <text x="435" y="44">Query / filter</text>
        <text x="435" y="82">Hierarchy builder</text>
        <text x="435" y="120">Paging + virtualisation</text>
        <text x="435" y="158">Render adapter</text>
        <text x="701" y="42">EF Core</text>
        <text x="701" y="100">ASP.NET Core API</text>
        <text x="701" y="158">Angular 12+</text>
      </g>
      <g fontFamily="Lora, serif" fontSize="9.5" letterSpacing="1.1" fill="#9b9797" textAnchor="middle">
        <text x="701" y="57">MS SQL SERVER</text>
        <text x="701" y="115">PAGED SUBTREES</text>
        <text x="701" y="173">SYNCFUSION TREE-GRID</text>
      </g>
      <g fill="none" stroke="#d7d3d3">
        <path d="M868 46 h116 M880 72 h104 M892 98 h92 M892 124 h92 M880 150 h104" />
      </g>
      <g fill="none" stroke="#b68235">
        <path d="M872 40 v10 M884 66 v10 M896 92 v10" />
        <path data-edge="1" d="M264 100 H340" strokeDasharray="4 4" />
        <path data-edge="1" d="M530 40 H572 V45 H612" />
        <path data-edge="1" d="M530 116 H572 V103 H612" />
        <path data-edge="1" d="M530 154 H572 V161 H612" />
        <path data-edge="1" d="M701 66 V82" />
        <path data-edge="1" d="M701 124 V140" />
        <path data-edge="1" d="M790 161 H820 V103 H852" />
      </g>
    </svg>
  );
}
