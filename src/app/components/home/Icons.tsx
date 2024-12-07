import recent from "../../../../public/recent.png";
import recentp from "../../../../public/recentp.png";

import home from "../../../../public/home.png";
import homep from "../../../../public/homeb.png";
export function Home(color: "regular" | "purple") {
  return color === "regular" ? home : color === "purple" ? homep : "";
}

export function Recent(color: "regular" | "purple") {
  return color === "regular" ? recent : color === "purple" ? recentp : "";
}
