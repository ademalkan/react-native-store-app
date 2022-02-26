import react from "react";
import { View, Text, Image } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ products }) => {
  console.log(products)
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: products.item.imgURL }}
      />
      <Text style={styles.title}>{products.item.title}</Text>
      <Text style={styles.price}>{products.item.price}</Text>
      {!products.item.inStock && <Text style={styles.stock}>"STOKTA YOK"</Text>}
      
    </View>
  );
};

export default ProductCard;
