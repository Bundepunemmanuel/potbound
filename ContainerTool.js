import { useState } from "react";

export default function ContainerTool({ label, varieties }) {
  const [selected, setSelected] = useState(varieties[0].value);
  const current = varieties.find((v) => v.value === selected);

  return (
    <div className="tool">
      <div className="tool-label">{label}</div>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {varieties.map((v) => (
          <option key={v.value} value={v.value}>
            {v.label}
          </option>
        ))}
      </select>
      <div className="tool-result">
        <div className="tool-metric">
          <div className="k">Min. container</div>
          <div className="v">{current.size}</div>
        </div>
        <div className="tool-metric">
          <div className="k">Min. depth</div>
          <div className="v">{current.depth}</div>
        </div>
      </div>
      <div className="tool-why">{current.why}</div>
    </div>
  );
}
