import React from 'react';
import {ModalComponent} from '../../components';
import {Modalize} from 'react-native-modalize';
import {useDispatch, useSelector} from 'react-redux';
import {setTimer, setAngle} from '../../redux/timer/actions';
import {changeTags} from '../../redux/tags/actions';
import {timeToAngle} from '../../utils/timer';

interface Props {
  modalizeRef: React.RefObject<Modalize>;
  data?: any;
}

export const ModalWrapper = ({modalizeRef, data}: Props) => {
  const tagsState = useSelector(state => state.tags);
  const timerState = useSelector(state => state.timer);
  const dispatch = useDispatch();

  console.log('state', tagsState, timerState);

  const onSelectTime = (time: number) => {
    dispatch(setTimer({time}));
    dispatch(setAngle({angle: timeToAngle(time)}));
  };
  const onSelectTag = (tag: string) => {
    dispatch(changeTags({name: tag}));
  };

  return (
    <ModalComponent
      modalizeRef={modalizeRef}
      selectedTime={timerState.time}
      onSelectTime={onSelectTime}
      selectedTag={tagsState.currentTag}
      onSelectTag={onSelectTag}
    />
  );
};
