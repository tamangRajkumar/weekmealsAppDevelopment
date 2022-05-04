import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const Scale = (size: number) => (width / guidelineBaseWidth) * size;
export const VerticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

  export {width, height}