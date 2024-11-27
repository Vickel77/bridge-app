import { Animated, Image, TouchableOpacity, View } from "react-native";
import UIText from "./UIText";
import { useTheme } from "@react-navigation/native";

const ProductCard = ({
  item,
  idx,
  styles,
}: // animationName,
{
  item: Product;
  idx: number;
  styles: any;
  // animationName: any;
}) => {
  const theme = useTheme();
  return (
    <Animated.View key={idx} style={[styles(theme).productCard]}>
      <Image source={{ uri: item.image }} style={styles(theme).productImage} />
      <UIText style={styles(theme).productTitle}>
        {item.title.slice(0, 20)}...
      </UIText>
      <UIText style={styles(theme).productDescription}>
        {item.description.slice(0, 20)}...
      </UIText>
      <View style={styles(theme).productFooter}>
        <UIText style={styles(theme).productPrice}>${item.price}</UIText>
        <TouchableOpacity style={styles(theme).addButton}>
          <UIText style={styles(theme).addButtonText}>+</UIText>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default ProductCard;
