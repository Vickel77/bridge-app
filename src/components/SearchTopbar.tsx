import { useTheme } from "@react-navigation/native";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import FilterIcon from "./icons/FilterIcon";
import Icon from "react-native-vector-icons/MaterialIcons";
import UIText from "./UIText";

export default function SearchTopbar({
  styles,
  searchQuery,
  handleSearchInput,
  handleSearchSubmit,
  searchHistory,
  clearSearchHistory,
  handleHistoryClick,
}: {
  styles: any;
  searchQuery: string;
  handleSearchInput: any;
  handleSearchSubmit: any;
  searchHistory: any;
  clearSearchHistory: () => void;
  handleHistoryClick: (e: any) => void;
}) {
  const theme = useTheme();

  return (
    <>
      <View style={styles(theme).topBar}>
        <View style={styles(theme).searchContainer}>
          <Icon
            name="search"
            size={30}
            color={"#FF882E5E"}
            style={styles(theme).searchIcon}
          />
          <TextInput
            style={styles(theme).searchInput}
            placeholder="Search"
            placeholderTextColor="#FF882E5E"
            value={searchQuery}
            onChangeText={handleSearchInput}
            onSubmitEditing={handleSearchSubmit}
          />
          {searchQuery && (
            <TouchableOpacity onPress={() => handleSearchInput("")}>
              <Icon
                name="cancel"
                size={20}
                color={"#ababab"}
                style={styles(theme).searchIcon}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles(theme).filterIcon}>
          <FilterIcon color={theme.colors.primary} size={20} />
        </View>
      </View>
      {/* Displays search history */}
      {searchHistory.length > 0 && (
        <View style={styles(theme).searchHistoryContainer}>
          <View style={styles(theme).searchHistoryHeader}>
            <UIText>Search History</UIText>
            <TouchableOpacity
              onPress={clearSearchHistory}
              style={styles(theme).clearButton}
            >
              <UIText style={styles(theme).clearButtonText}>Clear</UIText>
            </TouchableOpacity>
          </View>

          <UIText style={styles(theme).searchHistory}>
            {searchHistory.map((item: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleHistoryClick(item)}
              >
                <UIText style={styles(theme).searchHistoryItem}>{item}</UIText>
              </TouchableOpacity>
            ))}
          </UIText>
        </View>
      )}
    </>
  );
}
