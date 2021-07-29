import React from 'react';

import ConfettiCannon from 'react-native-confetti-cannon';

interface Props {
  onComplete?: Function;
}

export const Confetti = ({onComplete = () => {}}: Props) => {
  return (
    <ConfettiCannon
      count={100}
      origin={{x: -10, y: 0}}
      fadeOut
      onAnimationEnd={() => onComplete()}
    />
  );
};
