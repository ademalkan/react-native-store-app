import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import ProductCard from "./components/ProductCard";
import products from "./products.json";
export default function App() {
  const renderItem = (products) => (
    <ProductCard products={products} />
  );



  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Store</Text>
      </View>
      <View>
        <TextInput style={styles.searchbar} placeholder="Ara"></TextInput>
      </View>
      <FlatList numColumns={2} data={products} renderItem={renderItem}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  searchbar: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#f8f8f8",
    borderRadius: 8,
  },
});
