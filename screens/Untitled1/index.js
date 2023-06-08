import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View, TextInput, TouchableOpacity, Image } from "react-native";

const CreatePetProfile = ({
  navigation
}) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [dateOfAdoption, setDateOfAdoption] = useState("");
  const [description, setDescription] = useState("");
  const [specialAttributes, setSpecialAttributes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCreateProfile = () => {// Create pet profile logic
  };

  return <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("PetGallery")}>
          <Image source={require("./path/to/close-icon.png")} style={styles.closeButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{
        uri: imageUrl || "https://via.placeholder.com/150"
      }} style={styles.petImage} />
        <TouchableOpacity style={styles.changePhotoButton}>
          <Text style={styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
        <Text style={styles.textLabel}>Pet Name</Text>
        <TextInput style={styles.textInput} value={petName} onChangeText={setPetName} />
        <Text style={styles.textLabel}>Pet Type</Text>
        <TextInput style={styles.textInput} value={petType} onChangeText={setPetType} />
        <Text style={styles.textLabel}>Date of Adoption</Text>
        <TextInput style={styles.textInput} value={dateOfAdoption} onChangeText={setDateOfAdoption} />
        <Text style={styles.textLabel}>Description</Text>
        <TextInput style={styles.multilineTextInput} value={description} onChangeText={setDescription} multiline />
        <Text style={styles.textLabel}>Special Attributes</Text>
        <TextInput style={styles.multilineTextInput} value={specialAttributes} onChangeText={setSpecialAttributes} multiline />
        <Text style={styles.textLabel}>Image Url</Text>
        <TextInput style={styles.textInput} value={imageUrl} onChangeText={setImageUrl} />
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
    marginRight: 10
  },
  headerTitle: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 20,
    flex: 1,
    textAlign: "center"
  },
  contentContainer: {
    backgroundColor: "#EFF5F7",
    padding: 10,
    alignItems: "center"
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  changePhotoButton: {
    backgroundColor: "#DFEDF4",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  changePhotoText: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 16
  },
  textLabel: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 16,
    alignSelf: "flex-start",
    marginTop: 10
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "#DFEDF4",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginTop: 5
  },
  multilineTextInput: {
    backgroundColor: "white",
    borderColor: "#DFEDF4",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginTop: 5,
    height: 100,
    textAlignVertical: "top"
  },
  createProfileButton: {
    backgroundColor: "#376D89",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
    alignItems: "center"
  },
  createProfileText: {
    color: "white",
    fontFamily: "Lato",
    fontSize: 16
  }
});
export default CreatePetProfile;