import * as React from 'react';
import {Chip} from 'react-native-paper';

interface Props {
  text: string | number;
  icon?: string;
  onPress?: Function;
  selectedColor?: string;
  selected?: boolean;
}

export const Tag = ({
  text = 'Hello world.',
  icon = 'information',
  onPress = () => {},
  selectedColor = 'black',
  selected = false,
}: Props) => (
  <Chip
    style={{marginHorizontal: 5, borderRadius: 10}}
    // icon={icon}
    // selectedColor={selectedColor}
    selected={selected}
    onPress={() => onPress(text)}>
    {text}
  </Chip>
);
