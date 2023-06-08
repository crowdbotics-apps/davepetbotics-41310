import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
const pets = [{
  id: 1,
  name: 'Robot Dog',
  image: 'https://tinyurl.com/42evm3m3',
  fav: false
}, {
  id: 2,
  name: 'Robot Cat',
  image: 'https://tinyurl.com/42evm3m3',
  fav: true
}, {
  id: 3,
  name: 'Robot Fish',
  image: 'https://tinyurl.com/42evm3m3',
  fav: false
}, {
  id: 4,
  name: 'Robot Bird',
  image: 'https://tinyurl.com/42evm3m3',
  fav: true
}];

const ExploreScreen = ({
  navigation
}) => {
  const [filter, setFilter] = useState('all');
  const filteredPets = pets.filter(pet => {
    if (filter === 'all') return true;
    if (filter === 'myPets') return pet.userPet;
    if (filter === 'myFavs') return pet.fav;
  });

  const toggleFav = id => {
    const petIndex = pets.findIndex(pet => pet.id === id);
    pets[petIndex].fav = !pets[petIndex].fav;
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PetProfile')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.addPetButton} />
        </TouchableOpacity>
      </View>
      <FlatList data={filteredPets} numColumns={2} renderItem={({
      item
    }) => <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PetDetails', {
      pet: item
    })}>
            <Image source={{
        uri: item.image
      }} style={styles.petImage} />
            <Text style={styles.petName}>{item.name}</Text>
            <TouchableOpacity onPress={() => toggleFav(item.id)}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.favButton} />
            </TouchableOpacity>
          </TouchableOpacity>} keyExtractor={item => item.id.toString()} />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setFilter('all')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.footerButton} />
          <Text style={styles.footerText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('myPets')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.footerButton} />
          <Text style={styles.footerText}>My Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('myFavs')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.footerButton} />
          <Text style={styles.footerText}>My Favs</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F7'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DFEDF4',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  headerTitle: {
    fontSize: 24,
    color: '#376D89'
  },
  addPetButton: {
    width: 30,
    height: 30
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFF5F7',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  petImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  petName: {
    fontSize: 18,
    color: '#376D89'
  },
  favButton: {
    width: 30,
    height: 30
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DFEDF4',
    paddingVertical: 10
  },
  footerButton: {
    width: 30,
    height: 30
  },
  footerText: {
    fontSize: 14,
    color: '#376D89'
  }
});
export default ExploreScreen;