import React, { useState, useEffect } from "react";
import { 
  View, Text, Pressable, Image, StyleSheet 
} from "react-native";

const ProductCard = ({ product }) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [buttonColor, setButtonColor] = useState("#007BFF");

 
  useEffect(() => {
    Image.prefetch(product.image);
  }, [product.image]);

  const handleLongPress = () => {
    setShowQuickView(true);
    setTimeout(() => setShowQuickView(false), 1500);
  };

  const handleAddToCart = () => {
    setClickCount((prev) => prev + 1);
    setButtonColor("#28A745");
    setTimeout(() => setButtonColor("#007BFF"), 300);
  };

  return (
    <View style={styles.card}>
      <Pressable
        onLongPress={handleLongPress}
        android_ripple={{ color: "#f0f0f0" }}
        style={({ pressed }) => [
          styles.pressable,
          { transform: [{ scale: pressed ? 1.05 : 1 }] },
        ]}
      >
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        {showQuickView && <Text style={styles.quickView}>Quick View</Text>}
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: buttonColor, transform: [{ scale: pressed ? 1.05 : 1 }] },
        ]}
        onPress={handleAddToCart}
        android_ripple={{ color: "#f0f0f0" }}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
        {clickCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{clickCount}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  pressable: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quickView: {
    marginTop: 10,
    fontSize: 14,
    color: "gray",
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    position: "relative",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ProductCard;