import React from 'react';
import {View, Text} from 'react-native';
import {Modalize} from 'react-native-modalize';

interface Props {
  modalizeRef: React.RefObject<Modalize>;
  data?: any;
}

export const ModalComponent = ({modalizeRef, data}: Props) => {
  const renderItem = (item: any) => (
    <View>
      <Text>{item.heading}</Text>
    </View>
  );

  return (
    <>
      <Modalize
        ref={modalizeRef}
        flatListProps={{
          data: data,
          renderItem: renderItem,
          keyExtractor: item => item.heading,
          showsVerticalScrollIndicator: false,
        }}
        modalStyle={{height: 100}}
        childrenStyle={{height: 100}}
        adjustToContentHeight={true}
      />
    </>
  );
};
