import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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




const PlanetCard = ({ planet }) => {
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
          return Kepler62f
      case 'BarnardsStarb':
          return BarnardsStarb
    }
  };
  return (
    <View style={styles.card}>
      <View style={styles.infoCard}>
        <View style={styles.titleCard}>
          <View style={{}}>
            <Text style={styles.title}>{planet.name}</Text>
            <Text style={styles.subTitle}>{'Milkyway Galaxy'}</Text>
            <View style={styles.blueStrike}></View>
          </View>
          <Feather
            name="more-vertical"
            size={24}
            color="rgba(200,200,200, 0.5)"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 40,
          }}>
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
      <View style={styles.image}>
        <Image
          source={getImage(planet.name)}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
    </View>
  );
};

export default PlanetCard;

const styles = StyleSheet.create({
  blueStrike: {
    height: 2,
    backgroundColor: 'lightblue',
    width: 20,
  },
  card: {
    height: 100,
    width: '100%',
    marginTop: 25,
  },
  climateImg: {
    width: 10,
    height: 10,
    marginRight: 10,
  },
  climateInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  infoCard: {
    height: 100,
    width: '80%',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#322BB3',
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
    boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.2)',
  },
  image: {
    width: 80,
    height: 80,
    position: 'absolute',
    borderRadius: 40,
    top: 10,
    left: 10,
    overflow: 'hidden',
  },

  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
  titleCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 10,
    color: 'rgba(200,200,200, 0.5)',
    letterSpacing: 1.1,
  },
});
