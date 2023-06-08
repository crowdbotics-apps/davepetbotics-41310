import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Centered Title</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.textLabel}>Text Label</Text>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Text</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  header: {
    backgroundColor: "#DFEDF4",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  headerTitle: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 20
  },
  contentContainer: {
    backgroundColor: "#EFF5F7",
    padding: 10,
    flex: 1
  },
  textLabel: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 16
  },
  footer: {
    backgroundColor: "#DFEDF4",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  footerText: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 16
  }
});
export default Untitled5;