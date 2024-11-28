export type ColorStops = {
  text: string;
  primary: string;
  danger: string;
  dangerAccent: string;
  background: string;
  transparent: string;
  green: string;
  greenAccent: string;
  orange: string;
  orangeAccent: string;
  deepOrange: string;
  deepOrangeAccent: string;
  purple: string;
  purpleAccent: string;
};

export interface ColorProps {
  light: ColorStops;
  dark: ColorStops;
}

const colors: ColorProps = {
  light: {
    text: "#181725",
    primary: "#12AF37",
    danger: "",
    dangerAccent: "",
    background: "",
    transparent: "",
    green: "",
    greenAccent: "",
    orange: "",
    orangeAccent: "",
    deepOrange: "",
    deepOrangeAccent: "",
    purple: "",
    purpleAccent: "",
  },
  dark: {
    text: "#181725",
    primary: "#12AF37",
    danger: "",
    dangerAccent: "",
    background: "",
    transparent: "",
    green: "",
    greenAccent: "",
    orange: "",
    orangeAccent: "",
    deepOrange: "",
    deepOrangeAccent: "",
    purple: "",
    purpleAccent: "",
  },
};

export default colors;
