import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#bdbdbd",
    flex:1,
    padding: 8,
    marginHorizontal:10,
    marginBottom:10,
    borderRadius: 6,
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height/4,
    borderRadius: 6,
    maxWidth:"100%",
    maxHeight:"100%"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 12,
    marginBottom: 6,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
  },
  stock: {
    color: "#ff0101",
    fontWeight: "700",
    opacity: 0.7,
  },
});
