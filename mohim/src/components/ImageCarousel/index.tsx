/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = (props: ImageCarouselProps) => {
  const {images} = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const windowWidth = useWindowDimensions().width;

  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        keyExtractor={(item, index) => 'image-carousel-' + index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {backgroundColor: index === activeIndex ? 'grey' : '#ededed'},
            ]}
            key={`image-dot-${index}`}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#ededed',
    margin: 5,
  },
});

export default ImageCarousel;
