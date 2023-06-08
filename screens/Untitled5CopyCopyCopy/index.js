import { api_v1_pet_create } from "../../store/davepetboticsAPI/pets.slice.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";

const CreatePetProfile = ({
  navigation
}) => {
  const {
    entities: pet
  } = useSelector(state => state.pet || {});
  const dispatch = useDispatch();
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [adoptionDate, setAdoptionDate] = useState("");
  const [description, setDescription] = useState("");
  const [specialAttributes, setSpecialAttributes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCreateProfile = () => {
    onSubmit();
    Alert.alert("Pet Created", "", [{
      text: "OK",
      onPress: () => navigation.navigate("Pet Gallery")
    }]);
  };

  const onSubmit = () => {
    dispatch(api_v1_pet_create({
      name: petName,
      pet_type: petType,
      adoption_date: adoptionDate,
      description: description,
      special_attributes: specialAttributes,
      image_url: imageUrl
    }));
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
        uri: "https://drive.google.com/uc?export=view&id=1H6aB3CncDrYuLwPx0DBlNp0saLLRrNcp"
      }} style={styles.petImage} />
        <TouchableOpacity style={styles.changePhotoButton}>
          <Text style={styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
        <TextInput style={styles.textInput} placeholder="Pet Name" onChangeText={setPetName} value={petName} />
        <TextInput style={styles.textInput} placeholder="Pet Type" onChangeText={setPetType} value={petType} />
        <TextInput style={styles.textInput} placeholder="Date of Adoption" onChangeText={setAdoptionDate} value={adoptionDate} />
        <TextInput style={styles.textInput} placeholder="Description" onChangeText={setDescription} value={description} multiline />
        <TextInput style={styles.textInput} placeholder="Special Attributes" onChangeText={setSpecialAttributes} value={specialAttributes} multiline />
        <TextInput style={styles.textInput} placeholder="Image Url" onChangeText={setImageUrl} value={imageUrl} />
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
    width: 150,
    height: 150,
    borderRadius: 10
  },
  changePhotoButton: {
    backgroundColor: "#376D89",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  changePhotoText: {
    color: "white",
    fontFamily: "Lato",
    fontSize: 16
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "#376D89",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginTop: 10,
    fontFamily: "Lato",
    fontSize: 16
  },
  createProfileButton: {
    backgroundColor: "#376D89",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  createProfileText: {
    color: "white",
    fontFamily: "Lato",
    fontSize: 16
  }
});
export default CreatePetProfile;