import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackParams} from '../../navigation';
import slides from '../../../slides';
import GenesisItem from './GenesisItem';
import CustomButton from '../../components/Buttons/CustomButton';

const GenesisScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const onGetStartedPress =()=> {
    navigation.navigate("Register")
  }

  const onLoginPress =()=> {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <View style={styles.carousel_container}>
        <View style={{flex: 3}}>
          <FlatList
            data={slides}
            renderItem={({item}) => (
              <GenesisItem
                title={item.title}
                description={item.description}
                image={item.image}
              />
            )}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollx}}}],
              {
                useNativeDriver: false,
              },
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>

        
      </View>
      <View style={styles.footer_container}>
            <CustomButton onPress={onLoginPress} text='Login'/>
            <CustomButton onPress={onGetStartedPress} text='Open an account' type='SECONDARY'/>
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
  carousel_container: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer_container: {
    flex: 0.3,
    width:"80%"
  },
});

export default GenesisScreen;
