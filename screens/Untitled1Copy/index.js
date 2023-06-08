import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

const CreatePetProfile = ({
  navigation
}) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [adoptionDate, setAdoptionDate] = useState("");
  const [description, setDescription] = useState("");
  const [specialAttributes, setSpecialAttributes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCreateProfile = () => {
    Alert.alert("Pet Created", "", [{
      text: "OK",
      onPress: () => navigation.navigate("Pet Gallery")
    }]);
  };

  return <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Pet Gallery")}>
          <Image source={require("./back.png")} style={styles.closeButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{
        uri: imageUrl || "https://drive.google.com/uc?export=view&id=139XGK7ODE8e_MdcY6bHiBJes8xOqlV-L"
      }} style={styles.petImage} />
        <TouchableOpacity style={styles.changePhotoButton}>
          <Text style={styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Pet Name</Text>
        <TextInput style={styles.textInput} onChangeText={setPetName} value={petName} />
        <Text style={styles.label}>Pet Type</Text>
        <TextInput style={styles.textInput} onChangeText={setPetType} value={petType} />
        <Text style={styles.label}>Date of Adoption</Text>
        <TextInput style={styles.textInput} onChangeText={setAdoptionDate} value={adoptionDate} />
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.textInput} onChangeText={setDescription} value={description} multiline />
        <Text style={styles.label}>Special Attributes</Text>
        <TextInput style={styles.textInput} onChangeText={setSpecialAttributes} value={specialAttributes} multiline />
        <Text style={styles.label}>Image URL</Text>
        <TextInput style={styles.textInput} onChangeText={setImageUrl} value={imageUrl} />
        <TouchableOpacity style={styles.createProfileButton} onPress={handleCreateProfile}>
          <Text style={styles.createProfileText}>Create Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DFEDF4",
    padding: 10
  },
  closeButton: {
    width: 24,
    height: 24,
    marginRight: "auto"
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
    padding: 10,
    alignItems: "center"
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  changePhotoButton: {
    backgroundColor: "#DFEDF4",
    padding: 5,
    borderRadius: 5,
    marginTop: 10
  },
  changePhotoText: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 16
  },
  label: {
    alignSelf: "flex-start",
    marginTop: 10,
    fontFamily: "Lato",
    fontSize: 16
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "#376D89",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    marginTop: 5,
    padding: 5,
    fontFamily: "Lato",
    fontSize: 16
  },
  createProfileButton: {
    backgroundColor: "#376D89",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "60%",
    alignItems: "center"
  },
  createProfileText: {
    color: "white",
    fontFamily: "Lato",
    fontSize: 16
  }
});
export default CreatePetProfile;