
import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')

const px2W_react = (w, WB) => ((w / WB) * width)
const px2H_react = (h, HB) => ((h / HB) * height)

export { px2W_react, px2H_react }
