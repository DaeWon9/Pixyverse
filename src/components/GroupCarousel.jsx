import * as React from 'react';
import {View} from 'react-native';
import GroupCard from './GroupCard';
import Carousel from 'react-native-reanimated-carousel';
import {window} from '../constants';

const colors = ['#fda282', '#fdba4e', '#800015'];
const PAGE_WIDTH = window.width;
const PAGE_HEIGHT = window.width * 1.2;

function GroupCarousel() {
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  };

  return (
    <View style={{flex: 1}}>
      <Carousel
        {...baseOptions}
        loop
        autoPlay={false}
        withAnimation={{
          type: 'spring',
          config: {
            damping: 13,
          },
        }}
        data={colors}
        renderItem={({index, animationValue}) => (
          <GroupCard
            animationValue={animationValue}
            key={index}
            index={index}
          />
        )}
      />
    </View>
  );
}

export default GroupCarousel;
