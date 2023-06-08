import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";

const RobotPetDetails = ({
  navigation
}) => {
  const pet = {
    name: "RoboPet",
    type: "Robot Dog",
    adoptionDate: "01/01/2022",
    description: "A friendly and playful robot dog.",
    specialAttributes: "Can fetch, play, and recharge on its own."
  };
  return <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Pet Gallery")}>
          <Image source={require("./path/to/close-icon.png")} style={styles.closeButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{pet.name}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{
        uri: "https://drive.google.com/uc?export=view&id=139XGK7ODE8e_MdcY6bHiBJes8xOqlV-L"
      }} style={styles.petImage} />
        <View style={styles.petNameFavContainer}>
          <Text style={styles.petName}>{pet.name}</Text>
          <Image source={require("./path/to/fav-icon.png")} style={styles.favIcon} />
        </View>
        <View style={styles.petDetailsRow}>
          <Text style={styles.label}>Pet Name:</Text>
          <Text style={styles.detail}>{pet.name}</Text>
        </View>
        <View style={styles.petDetailsRow}>
          <Text style={styles.label}>Pet Type:</Text>
          <Text style={styles.detail}>{pet.type}</Text>
        </View>
        <View style={styles.petDetailsRow}>
          <Text style={styles.label}>Date of Adoption:</Text>
          <Text style={styles.detail}>{pet.adoptionDate}</Text>
        </View>
        <View style={styles.petDetailsRow}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.detail}>{pet.description}</Text>
        </View>
        <View style={styles.petDetailsRow}>
          <Text style={styles.label}>Special Attributes:</Text>
          <Text style={styles.detail}>{pet.specialAttributes}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  header: {
    backgroundColor: "#DFEDF4",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  closeButton: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  headerTitle: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 20,
    textAlign: "center",
    flex: 1
  },
  contentContainer: {
    backgroundColor: "#EFF5F7",
    padding: 10
  },
  petImage: {
    width: 356,
    height: 308,
    resizeMode: "cover"
  },
  petNameFavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  petName: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 16
  },
  favIcon: {
    width: 24,
    height: 24
  },
  petDetailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10
  },
  label: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 16,
    flex: 1
  },
  detail: {
    color: "#7D9BAA",
    fontFamily: "Lato",
    fontSize: 16,
    flex: 2
  }
});
export default RobotPetDetails;