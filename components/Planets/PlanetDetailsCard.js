import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
const earth = require('../../../assets/A-4/earth1.png');
const mars = require('../../../assets/A-4/mars1.png');
const mercury = require('../../../assets/A-4/mer.png');
const moon = require('../../../assets/A-4/moon.png');
const neptune = require('../../../assets/A-4/neptune1.png');
const venus = require('../../../assets/A-4/ven.png');
const jupiter = require('../../../assets/A-4/jupiter1.png');
const saturn = require('../../../assets/A-4/saturn.png');
const uranus = require('../../../assets/A-4/uranus.png');




const PlanetCardDetails = ({ planet }) => {
  const getImage = (name) => {
    switch (name) {
      case 'Earth':
        return earth;
      case 'Neptune':
        return neptune;
      case 'Moon':
        return moon;
      case 'Mars':
        return mars;
      case 'Mercury':
        return mercury;
      case 'Venus':
          return venus;
      case 'Jupiter':
          return jupiter;
      case 'Saturn':
          return saturn;
      case 'Uranus':
          return uranus    
      
    }
  };
  return (
    <View style={styles.infoCardParent}>
      <View style={styles.infoCard}>
        <View style={styles.infoCardChild}>
          <Image
            source={getImage(planet.name)}
            style={{ width: 80, height: 80 }}
          />
          <Text style={styles.title}>{planet.name}</Text>
          <Text style={styles.subTitle}>{planet.location}</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.climateInfo}>
              <Image
                source={require('../../../assets/A-4/ic_distance.png')}
                style={styles.climateImg}
              />
              <Text style={styles.subTitle}>{planet.distance}</Text>
            </View>
            <View style={styles.climateInfo}>
              <Image
                source={require('../../../assets/A-4/ic_gravity.png')}
                style={styles.climateImg}
              />
              <Text style={styles.subTitle}>{planet.gravity}</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          height: '75%',
          width: '100%',
          overflow: 'hidden',
          paddingHorizontal: 10,
          //paddingTop:70,
          top:90,
          paddingBottom:-30,
          bottom: -40,
        }}>
        <Text style={styles.title}>DESCRIPTION</Text>
        <View style={styles.blueStrike}></View>

        <ScrollView>
          <Text style={styles.subTitle}>{planet.description}</Text>
        </ScrollView>
      </View>
      
    </View>
  );
};

export default PlanetCardDetails;

const styles = StyleSheet.create({
  bottomBtn: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      'linear-gradient(to right, #1e5799 0%,#207cca 41%,#207cca 43%,#7db9e8 100%)',
  },
  climateImg: {
    width: 10,
    height: 10,
    marginRight: 10,
  },

  infoCardParent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    zIndex: 99,
    backgroundColor: '#000235',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  climateInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  infoCard: {
    backgroundColor: '#322BB3',
    height: 130,
    position: 'absolute',
    top: -50,
    left: 20,
    right: 20,
    borderRadius: 10,
    boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.2)',
  },
  infoCardChild: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -40,
    alignItems: 'center',
  },

  title: { fontSize: 20, color: 'white', fontWeight: '600' },
  subTitle: {
    fontSize: 12,
    color: 'rgba(200,200,200, 0.5)',
    letterSpacing: 1.1,
  },
  blueStrike: {
    height: 2,
    backgroundColor: 'lightblue',
    width: 20,
  },
});
