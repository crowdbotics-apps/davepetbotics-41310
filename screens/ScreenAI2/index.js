import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({
  navigation
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Pet Gallery');
    }, 2000);
  }, []);
  return <View style={styles.container}>
      <Image source={require("./PetboticsLogo.png")} style={styles.logo} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFEDF4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 253,
    height: 395
  }
});
export default SplashScreen;