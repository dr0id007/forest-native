import React from 'react';
import {Divider} from 'react-native-elements';

interface Props {
  width?: number;
  color?: string;
}

export const Hr = ({width = 1, color = 'grey'}: Props) => {
  return (
    <Divider
      style={{marginBottom: 10, marginTop: 5}}
      width={width}
      color={color}
    />
  );
};
