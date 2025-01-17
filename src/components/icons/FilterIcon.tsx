import React from "react";
import { SvgXml } from "react-native-svg";

const xml = (
  color: string
) => `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.31271 18.0702L1.00023 18.0702" stroke=${color} stroke-width="2" stroke-linecap="round"/>
<path d="M21.4748 18.0702L8.3126 18.0702" stroke=${color} stroke-opacity="0.59" stroke-width="2" stroke-linecap="round"/>
<path d="M11.4687 17.9313C11.4687 16.0611 9.96435 14.5451 8.10867 14.5451C6.253 14.5451 4.74867 16.0611 4.74867 17.9313C4.74867 19.8015 6.253 21.3176 8.10867 21.3176C9.96435 21.3176 11.4687 19.8015 11.4687 17.9313Z" fill=${color} stroke=${color} stroke-width="1.5"/>
<path d="M14.1623 4.24738L21.4748 4.24737" stroke=${color} stroke-width="2" stroke-linecap="round"/>
<path d="M1.00018 4.24738L14.1624 4.24737" stroke=${color} stroke-opacity="0.59" stroke-width="2" stroke-linecap="round"/>
<path d="M11.0063 4.38627C11.0063 6.25645 12.5107 7.77253 14.3663 7.77253C16.222 7.77253 17.7263 6.25645 17.7263 4.38627C17.7263 2.51608 16.222 1 14.3663 1C12.5107 1 11.0063 2.51608 11.0063 4.38627Z" fill=${color} stroke=${color} stroke-width="1.5"/>
</svg>

`;

export default function FilterIcon({
  size = 30,
  color = "#5F9117",
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
