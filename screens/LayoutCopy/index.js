import { api_v1_pet_list } from "../../store/davepetboticsAPI/pets.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";

const Explore = ({
  navigation
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api_v1_pet_list());
  }, []);
  const {
    entities: pets
  } = useSelector(state => state.Pets);

  const toggleFavorite = () => {// Update favorite status in the store
  };

  const renderItem = ({
    item: pet
  }) => <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("PetDetails", {
    pet
  })}>
      <Image style={styles.petImage} source={{
      uri: pet.imageurl
    }} />
      <Text style={styles.petName}>{pet.name}</Text>
      <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
        <Image style={styles.favoriteIcon} source={require("./fav.png")} />
      </TouchableOpacity>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity style={styles.addPetButton} onPress={() => navigation.navigate("Untitled5CopyCopyCopy")}>
          <Image style={styles.addPetIcon} source={require("./add.png")} />
        </TouchableOpacity>
      </View>
      <FlatList contentContainerStyle={styles.contentContainer} data={pets} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} />
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