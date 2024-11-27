import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function useProducts() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  }) as {
    data: Product[];
    isLoading: boolean;
    isError: any;
  };

  async function fetchProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }

  const generateCategoryColor = (index: number) => {
    const colors = ["#1E88E5", "#8E44AD", "#27AE60", "#E74C3C", "#F39C12"];
    return colors[index % colors.length];
  };

  const categories = [
    ...new Set(products?.map((product: Product) => product.category)),
  ].map((category, index) => ({
    id: index + 1,
    title: category,
    image: products.find((product) => product.category === category)?.image,
    color: generateCategoryColor(index),
  }));

  return { fetchProducts, categories, isLoading, isError, products };
}

export default useProducts;
