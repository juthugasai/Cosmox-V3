import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
const Kepler186f = require('../../../assets/A-6/kep.png');
const Gliese876d = require('../../../assets/A-6/galiese.png');
const PegasiB = require('../../../assets/A-6/peg.png');
const moon = require('../../../assets/A-4/moon.png');
const TOI1452b = require('../../../assets/A-6/toi.png');
const Kepler452b = require('../../../assets/A-6/kepler.png');
const Gliese436b = require('../../../assets/A-6/gali.png');
const Kepler62f = require('../../../assets/A-6/ke.png');
const BarnardsStarb = require('../../../assets/A-6/bar.png');




const PlanetCardDetails = ({ planet }) => {
  const getImage = (name) => {
    switch (name) {
      case 'Kepler186f':
        return Kepler186f;
      case 'TOI1452b':
        return TOI1452b;
      case 'Moon':
        return moon;
      case 'Gliese876d':
        return Gliese876d;
      case 'PegasiB':
        return PegasiB;
      case 'Kepler452b':
          return Kepler452b;
      case 'Gliese436b':
          return Gliese436b;
      case 'Kepler62f':
          return Kepler62f;
      case 'BarnardsStarb':
          return BarnardsStarb    
      
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
