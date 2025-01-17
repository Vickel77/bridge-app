import React from "react";
import { SvgXml } from "react-native-svg";

const xml = (
  color: string
) => `<svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9355 1.52469H4.01446C2.6977 1.52469 1.63025 2.59214 1.63025 3.9089V19.4063C1.63025 20.7231 2.6977 21.7905 4.01446 21.7905H15.9355C17.2523 21.7905 18.3197 20.7231 18.3197 19.4063V3.9089C18.3197 2.59214 17.2523 1.52469 15.9355 1.52469Z" stroke=${color} stroke-opacity="0.56" stroke-width="1.96347"/>
<path d="M6.39847 7.48605H13.5511M6.39847 12.2545H13.5511M6.39847 17.0229H11.1669" stroke=${color} stroke-opacity="0.56" stroke-width="1.96347" stroke-linecap="round"/>
</svg>

`;

export default function OrderIcon({
  size = 30,
  color = "#667185",
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties | any;
}) {
  return (
    <SvgXml
      color={color}
      style={{ ...style }}
      xml={xml(color)}
      width={size}
      height={size}
    />
  );
}
