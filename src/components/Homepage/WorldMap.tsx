import { WorldMap } from "react-svg-worldmap";

const data = [
  { country: "us", value: 1 },
  { country: "mx", value: 1 },
  { country: "br", value: 1 },
  { country: "in", value: 1 },
  { country: "ng", value: 1 },
  { country: "za", value: 1 },
  { country: "eg", value: 1 },
  { country: "ke", value: 1 },
  { country: "jp", value: 1 },
  { country: "no", value: 1 },
  { country: "gl", value: 1 },
];

export default function WorldMapCard() {
  return (
      /* Header */
      

      /* Map */
      <div className="w-full flex justify-center">
        <WorldMap
          color="#1d4ed8"
          size="xl"
          data={data}
          frame
          styleFunction={() => ({
            fill: "#1d4ed8",
            outline: "none",
          })}
        />
      </div>
  );
}
