import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
const CanisMajor = require('../../../assets/A-5/Canis.png');
const Scorpius = require('../../../assets/A-5/Scorpius.png');
const Sagittarius = require('../../../assets/A-5/Sagittarius.png');
const moon = require('../../../assets/A-4/moon.png');
const Cassiopeia = require('../../../assets/A-5/cass.png');
const Orion = require('../../../assets/A-5/Orion.png');
const Ara = require('../../../assets/A-5/Ara.png');
const UrsaMajor = require('../../../assets/A-5/ursa.png');
const Leo = require('../../../assets/A-5/leo.png');




const PlanetCard = ({ planet }) => {
  const getImage = (name) => {
    switch (name) {
      case 'CanisMajor':
        return CanisMajor;
      case 'Cassiopeia':
        return Cassiopeia;
      case 'Moon':
        return moon;
      case 'Scorpius':
        return Scorpius;
      case 'Sagittarius':
        return Sagittarius;
      case 'Orion':
          return Orion;
      case 'Ara':
          return Ara;
      case 'UrsaMajor':
          return UrsaMajor
      case 'Leo':
          return Leo
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
            <Text style={styles.subTitle}>{planet.age}</Text>
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
