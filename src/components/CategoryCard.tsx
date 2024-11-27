import { useTheme } from "@react-navigation/native";
import { Animated, Image } from "react-native";
import UIText from "./UIText";

const CategoryCard = ({
  item,
  idx,
  styles,
  animationName1,
  animationName2,
}: {
  item: {
    id: number;
    title: string;
    image?: string;
    color: string;
  };
  idx: number;
  styles: any;
  animationName1: any;
  animationName2: any;
}) => {
  const theme = useTheme();
  return (
    <Animated.View
      key={idx}
      style={[
        styles(theme).categoryCard,
        {
          backgroundColor: item.color + "20",
          borderColor: item.color,
          borderWidth: 1,
          opacity: animationName1, // Apply fade-in opacity
          transform: [{ translateY: animationName2 }], // Apply translateY animation
        },
      ]}
    >
      <Image source={{ uri: item.image }} style={styles(theme).productImage} />
      <UIText style={styles(theme).categoryTitle}>{item.title}</UIText>
    </Animated.View>
  );
};

export default CategoryCard;
