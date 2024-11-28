import { useState, useRef, useMemo } from "react";
import { View, StyleSheet, Keyboard, ScrollView, Animated } from "react-native";

import { useFocusEffect, useTheme } from "@react-navigation/native";
import UIText from "../components/UIText";
import useProducts from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import SearchTopbar from "../components/SearchTopbar";
import Loader from "../components/Loader";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();

  const { isError, isLoading, products, categories } = useProducts();

  // Sets the search input text
  const handleSearchInput = (text: string) => {
    setSearchQuery(text);
  };

  // Clears search history
  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  const handleHistoryClick = (item: string) => {
    setSearchQuery(item);
    setSearchTerm(item); // Execute search for the clicked history item
  };

  const handleSearchSubmit = () => {
    setSearchTerm(searchQuery); // Execute search
    Keyboard.dismiss(); // Close the keyboard

    if (searchQuery.trim() && !searchHistory.includes(searchQuery)) {
      setSearchHistory((prev) => [...prev, searchQuery]);
    }
  };

  // Products search result
  const filteredProducts = searchQuery
    ? products?.filter(
        (product: any) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  // Categories search result
  const filteredCategories = searchQuery
    ? categories?.filter((product: any) =>
        product?.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories;

  // Fade-in animation
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0
  // Slide up animation
  const translateYAnim = useRef(new Animated.Value(30)).current; // Initial Y position is 30

  useFocusEffect(() => {
    fadeAnim.setValue(0);
    translateYAnim.setValue(30);
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Slide up animation
    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  });

  if (isLoading) return <Loader />;
  if (isError) return <UIText>Failed to load products</UIText>;

  return (
    <View style={styles(theme).container}>
      <SearchTopbar
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
        styles={styles}
        clearSearchHistory={clearSearchHistory}
        handleHistoryClick={handleHistoryClick}
        searchHistory={searchHistory}
      />
      {/* Displays product categories and products */}
      <ScrollView
        style={{
          backgroundColor: "#efefef55",
          borderRadius: 10,
          padding: 25,
        }}
      >
        {/* <UIText style={styles(theme).sectionHeader}>Categories</UIText> */}
        <View style={[styles(theme).row, { marginBottom: 20 }]}>
          {filteredCategories?.map((category, idx) => (
            <CategoryCard
              animationName1={fadeAnim}
              animationName2={translateYAnim}
              idx={idx}
              item={category}
              styles={styles}
              key={idx}
            />
          ))}
        </View>
        {/* <UIText style={styles(theme).sectionHeader}>Products</UIText> */}
        <View style={styles(theme).row}>
          {filteredProducts?.slice(0, 20).map((product, idx) => (
            <ProductCard key={idx} styles={styles} idx={idx} item={product} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // padding: 25,
      backgroundColor: "#FFF",
      paddingTop: 50,
    },
    topBar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      // marginBottom: 20,
      paddingHorizontal: 25,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      // height: 40,
      borderWidth: 1,
      borderColor: "#EFEFEF",
      borderRadius: 10,
      // paddingHorizontal: 10,
      marginBottom: 5,
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: "#FCFCFD",
      flex: 1,
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      fontSize: 18,
      color: "#333",
    },
    filterIcon: {
      padding: 15,
      shadowColor: "#000000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
      borderRadius: 10,
      backgroundColor: "white",
    },
    searchHistoryContainer: {
      marginBottom: 20,
      position: "relative",
      paddingHorizontal: 25,
      width: "100%",
      margin: "auto",
    },
    searchHistoryHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    clearButton: {
      // position: "absolute",
      top: 0,
      right: 0,
      zIndex: 999,
    },
    clearButtonText: {
      fontSize: 12,
      color: "#E74C3C",
    },
    searchHistory: {
      fontSize: 12,
      color: "#888",
      marginBottom: 16,
    },
    searchHistoryItem: {
      marginRight: 8,
      color: "#ababab",
      // textDecorationLine: "underline",
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    sectionHeader: {
      fontSize: 16,
      // fontWeight: "bold",
      marginVertical: 5,
      opacity: 0.5,
    },
    categoryCard: {
      paddingVertical: 20,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      marginBottom: 16,
      width: "47%",
    },
    categoryTitle: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "capitalize",
    },
    productList: {
      paddingBottom: 16,
    },
    productCard: {
      borderWidth: 1,
      borderColor: "#CCC",
      borderRadius: 15,
      padding: 16,
      marginBottom: 12,
      // flex: 1,
      width: "47%",
    },
    productImage: {
      width: "100%",
      height: 100,
      resizeMode: "contain",
      marginBottom: 8,
    },
    productTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 4,
      textTransform: "capitalize",
    },
    productDescription: {
      fontSize: 12,
      color: "#666",
      marginBottom: 8,
    },
    productFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    productPrice: {
      fontSize: 16,
      fontWeight: "bold",
    },
    addButton: {
      fontWeight: "bold",
      color: "#1E88E5",
      backgroundColor: "#087319",
      padding: 2,
      paddingHorizontal: 8,
      borderRadius: 8,
    },
    addButtonText: {
      color: "#ffffff",
      fontSize: 25,
    },
  });

export default Search;
