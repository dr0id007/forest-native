import React, {FC, useState, useRef, useCallback} from 'react';
import {
  PanResponder,
  Dimensions,
  Text as T,
  View,
  TouchableOpacity,
} from 'react-native';
import Svg, {Path, Circle, G, Text} from 'react-native-svg';

interface Props {
  btnRadius?: number;
  dialRadius?: number;
  dialWidth?: number;
  meterColor?: string;
  textColor?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  textSize?: number;
  value?: number;
  min?: number;
  max?: number;
  xCenter?: number;
  yCenter?: number;
  innerText?: string;
  initialTime?: number;
  time?: number;
  setTime?: Function;
  onTextPress?: Function;
}

const CircleSlider: FC<Props> = ({
  btnRadius = 15,
  dialRadius = 130,
  dialWidth = 5,
  meterColor = '#0cd',
  textColor = '#fff',
  fillColor = 'none',
  strokeColor = '#fff',
  strokeWidth = 0.5,
  textSize = 10,
  value = 0,
  initialTime = 0,
  min = 0,
  max = 359,
  xCenter = Dimensions.get('window').width / 2,
  yCenter = Dimensions.get('window').height / 2,
  // innerText = 'hey',
  time = 10,
  setTime = () => {},
  onTextPress = () => {},
}) => {
  const [angle, setAngle] = useState(value);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gs) => true,
      onStartShouldSetPanResponderCapture: (e, gs) => true,
      onMoveShouldSetPanResponder: (e, gs) => true,
      onMoveShouldSetPanResponderCapture: (e, gs) => true,
      onPanResponderMove: (e, gs) => {
        let xOrigin = xCenter - (dialRadius + btnRadius);
        let yOrigin = yCenter - (dialRadius + btnRadius);
        let a = cartesianToPolar(gs.moveX - xOrigin, gs.moveY - yOrigin);

        let x = a;
        if (a <= min) {
          x = min;
          setAngle(min);
        } else if (a >= max) {
          x = max;
          setAngle(max);
        } else {
          setAngle(a);
        }
        const timeFromAngle = angleToTime(x);
        if (timeFromAngle) setTime(timeFromAngle);
      },
    }),
  ).current;

  const polarToCartesian = useCallback(
    angle => {
      let r = dialRadius;
      let hC = dialRadius + btnRadius;
      let a = ((angle - 90) * Math.PI) / 180.0;

      let x = hC + r * Math.cos(a);
      let y = hC + r * Math.sin(a);
      return {x, y};
    },
    [dialRadius, btnRadius],
  );

  const cartesianToPolar = useCallback(
    (x, y) => {
      let hC = dialRadius + btnRadius;

      if (x === 0) {
        return y > hC ? 0 : 180;
      } else if (y === 0) {
        return x > hC ? 90 : 270;
      } else {
        return (
          Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
          (x > hC ? 90 : 270)
        );
      }
    },
    [dialRadius, btnRadius],
  );

  const angleToTime = (angle: number) => {
    //   need to add more realistic time.
    if (angle >= 0 && angle <= 15) return 10;
    if (angle >= 15 && angle <= 30) return 15;
    if (angle > 30 && angle <= 45) return 20;
    if (angle > 45 && angle <= 60) return 25;
    if (angle > 60 && angle <= 75) return 30;
    if (angle > 75 && angle <= 90) return 35;
    if (angle > 90 && angle <= 105) return 40;
    if (angle > 105 && angle <= 120) return 45;
    if (angle > 120 && angle <= 135) return 50;
    if (angle > 135 && angle <= 150) return 55;
    if (angle > 150 && angle <= 180) return 60;
    // half rotation
    if (angle > 180 && angle <= 210) return 70;
    if (angle > 210 && angle <= 240) return 80;
    if (angle > 240 && angle <= 270) return 90;
    if (angle > 270 && angle <= 300) return 100;
    if (angle > 300 && angle <= 330) return 110;
    if (angle > 330 && angle <= 360) return 120;
  };

  const width = (dialRadius + btnRadius) * 2;
  const bR = btnRadius;
  const dR = dialRadius;
  const startCoord = polarToCartesian(0);
  var endCoord = polarToCartesian(angle);

  const renderTime = (time: number) => {
    if (time <= 180) {
      return `${time} min`;
    }
    return `${(time / 60).toFixed(0)}h ${(time % 60).toFixed(0)}m`;
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginHorizontal: 50,
            top: dR + 35,
            zIndex: 2,
          }}
          onPress={() => {
            onTextPress();
          }}>
          <T
            style={{
              textAlign: 'center',
              fontSize: 35,
              color: 'white',
            }}>
            {renderTime(time)}
          </T>
        </TouchableOpacity>
        <Svg width={width} height={width}>
          <Circle
            r={dR}
            cx={width / 2}
            cy={width / 2}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={fillColor}
            {...panResponder.panHandlers}
          />

          <Path
            stroke={meterColor}
            strokeWidth={dialWidth}
            fill="none"
            d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${
              angle > 180 ? 1 : 0
            } 1 ${endCoord.x} ${endCoord.y}`}
          />
          <G x={endCoord.x - bR} y={endCoord.y - bR}>
            <Circle
              r={bR}
              cx={bR}
              cy={bR}
              fill={meterColor}
              // {...panResponder.panHandlers}
            />
            <Text
              x={bR}
              y={bR + textSize / 2}
              fontSize={textSize}
              fill={textColor}
              textAnchor="middle">
              {time}
            </Text>
          </G>
        </Svg>
      </View>
    </View>
  );
};

export default React.memo(CircleSlider);
// export default CircleSlider;
