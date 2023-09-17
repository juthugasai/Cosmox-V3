import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Linking,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import { Text, Card, Divider } from 'react-native-paper';

import moment from 'moment';

const Articles = (props) => {
  const { article } = props;
  const { title, description, published, enclosures, links } = article;
  const {
    noteStyle,
    featuredTitleStyle,
    cardStyle,
    descriptionStyle,
    dividerStyle,
    timeStyle,
  } = styles;
  const time = moment(published || moment.now()).fromNow();

  return (
    <View style={{backgroundColor:'#000235'}}>
      
    <TouchableNativeFeedback
      useForeground
      onPress={() => Linking.openURL(links[0].url)}>
      <Card
        style={styles.cardStyle}
        featuredTitle={title}
        featuredTitleStyle={styles.featuredTitleStyle}
        image={{
          uri: enclosures[0].url,
        }}>
        <Text style={styles.descriptionStyle}>{description || 'Read More...'}</Text>
        <Divider style={styles.dividerStyle} />
        <View style={styles.timeStyle}>
          <Text style={styles.noteStyle}>{time}</Text>
        </View>
      </Card>
    </TouchableNativeFeedback></View>
  );
};

Articles.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    paddingTop: 30,
    //paddingBottom: 30,
    borderRadius:10,
    margin:11,
    backgroundColor:'white'
    
  },
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10,
    borderRadius: 70,
    fontWeight:'bold'
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
    borderBottomEndRadius: 10,
  },
  descriptionStyle: {
    marginBottom: 10,
    fontWeight:'bold'
  },
  dividerStyle: {
    backgroundColor: '#dfe6e9',
    
    
    

  },
  textStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Articles;
