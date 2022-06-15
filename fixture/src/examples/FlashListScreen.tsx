import {ReactNavigationPerformanceView} from '@shopify/react-native-performance-navigation';
import {FlashListPerformanceView} from '@shopify/react-native-performance-lists-profiler';
import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import {NavigationKeys} from '../constants';

const generateArray = (size: number) => {
  return Array.from(Array(size).keys());
};

const FlashListScreen = () => {
  const data = useRef(generateArray(3000)).current;

  return (
    <ReactNavigationPerformanceView screenName={NavigationKeys.FLASH_LIST_SCREEN} interactive>
      <FlashListPerformanceView listName="FlashList">
        <FlashList
          keyExtractor={item => {
            return item.toString();
          }}
          renderItem={({item}) => {
            const backgroundColor = item % 2 === 0 ? '#00a1f1' : '#ffbb00';
            return (
              <View style={[styles.container, {backgroundColor}]}>
                <Text>Cell Id: {item}</Text>
              </View>
            );
          }}
          estimatedItemSize={200}
          data={data}
        />
      </FlashListPerformanceView>
    </ReactNavigationPerformanceView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 120,
    backgroundColor: '#00a1f1',
  },
});

export default FlashListScreen;
