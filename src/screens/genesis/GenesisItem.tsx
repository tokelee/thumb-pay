import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

type ItemProps = {
  title:string;
  description: string;
  image: any;
}

const GenesisItem = ({title, description, image}: ItemProps) => {
  const {width} = useWindowDimensions();

  return (
  
      <View style={[styles.container, {width}]}>
        <Image
          source={image}
          style={[styles.image, {width:(width*0.55), resizeMode: 'contain'}]}
        />

        <View style={{flex: 0.3}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    maxWidth:300,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});

export default GenesisItem;
