import { Pressable } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";

const PetCard = ({
  pet,
  onPress,
  onToggleFavorite
}) => <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image style={styles.petImage} source={{
    uri: pet.image
  }} />
    <Text style={styles.petName}>{pet.name}</Text>
    <TouchableOpacity style={styles.favoriteButton} onPress={onToggleFavorite}>
      <Image style={styles.favoriteIcon} source={require("./fav.png")} />
    </TouchableOpacity>
  </TouchableOpacity>;

const Explore = ({
  navigation
}) => {
  const {
    entities: pets
  } = useSelector(state => state.Pets);

  const toggleFavorite = () => {// Update favorite status in the store
  };

  return <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity style={styles.addPetButton} onPress={() => navigation.navigate("PetProfile")}>
          <Pressable onPress={() => {
          navigation.navigate("Untitled5CopyCopyCopy");
        }}><Image style={styles.addPetIcon} source={require("./add.png")} /></Pressable>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {pets.map(pet => <PetCard key={pet.id} pet={pet} onPress={() => navigation.navigate("PetDetails", {
        pet
      })} onToggleFavorite={() => toggleFavorite(pet.id)} />)}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image style={styles.footerIcon} source={require("./1200px-Magnifying_glass_icon.svg.png")} />
          <Text style={styles.footerText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image style={styles.footerIcon} source={require("./peticon.png")} />
          <Text style={styles.footerText}>My Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image style={styles.footerIcon} source={require("./notfav.png")} />
          <Text style={styles.footerText}>My Favs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  header: {
    backgroundColor: "#DFEDF4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  headerTitle: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 20
  },
  addPetButton: {
    padding: 5
  },
  addPetIcon: {
    width: 24,
    height: 24
  },
  contentContainer: {
    backgroundColor: "#EFF5F7",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  card: {
    backgroundColor: "#EFF5F7",
    borderRadius: 10,
    width: "48%",
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  petName: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 16
  },
  favoriteButton: {
    padding: 5
  },
  favoriteIcon: {
    width: 24,
    height: 24
  },
  footer: {
    backgroundColor: "#DFEDF4",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10
  },
  footerButton: {
    alignItems: "center"
  },
  footerIcon: {
    width: 24,
    height: 24
  },
  footerText: {
    color: "#376D89",
    fontFamily: "Lato",
    fontSize: 16
  }
});
export default Explore;