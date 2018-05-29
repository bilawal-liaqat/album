import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {title, artist , thumbnail_image , image } = album;

  return (
      <Card>
      <CardSection>
      <View style = {styles.thumnailContainerStyle}>
        <Image
        style = {styles.thumnailStyle}
        source={{ uri: thumbnail_image }} />
      </View>
      <View style = { styles.headerContentStyle}>
          <Text style = {styles.headerTextStyle}> { title} </Text>
          <Text> { artist} </Text>
      </View>
      </CardSection>

      <CardSection>
      <Image
      style = {styles.imageStyle}
      source = {{ uri: image}} />
      </CardSection>

      <CardSection>
      <Button onPress = {() => console.log(title)}/>
      </CardSection>
      </Card>
  );

};


const styles = {
  headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumnailStyle: {
    width: 50,
    height: 50
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
