import recent from "../../../../public/recent.png";
import recentp from "../../../../public/recentp.png";

export function Home({ color }: { color: "regular" | "purple" }) {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <path
        d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"
        fill=${color == "regular" ? "#FF5733" : "#6F459B"}
      />
    </svg>
`;
}

export function Recent({ color }: { color: "regular" | "purple" }) {
  return color === "regular" ? recent : color === "purple" ? recentp : "";
}
