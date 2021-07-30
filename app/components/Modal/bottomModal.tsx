import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Tag, Btn, IconBtn} from '../../components';
import {Tags} from '../../constants/tags';

interface Props {
  modalizeRef: React.RefObject<Modalize>;
  data?: any;
  selectedTime?: number;
  onSelectTime?: Function;
  selectedTag?: string;
  onSelectTag?: Function;
}

export const ModalComponent = ({
  modalizeRef,
  data,
  selectedTime = 10,
  onSelectTime = () => {},
  selectedTag = 'Study',
  onSelectTag = () => {},
}: Props) => {
  const renderMinutesList = (selectedTime: number) => {
    let arr = [];

    for (let i = 5; i <= 120; i = i + 5) {
      arr.push(
        <Tag
          key={i}
          text={i}
          selected={selectedTime === i ? true : false}
          selectedColor={'red'}
          onPress={onSelectTime}
        />,
      );
    }
    return arr;
  };

  return (
    <>
      <Modalize
        ref={modalizeRef}
        // modalStyle={{height: 100}}
        // childrenStyle={{height: 400}}
        adjustToContentHeight={true}>
        <View style={styles.container}>
          <Text style={styles.text}>Tags:</Text>
          <View style={styles.row}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {Tags.map((data, index) => {
                return (
                  <Tag
                    text={data.name}
                    key={index}
                    selected={selectedTag === data.name ? true : false}
                    selectedColor={'red'}
                    onPress={onSelectTag}
                  />
                );
              })}
            </ScrollView>
          </View>
          <Text style={styles.text}>Focused Time:</Text>
          <View style={styles.row}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {renderMinutesList(selectedTime)}
            </ScrollView>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.row}>
              <IconBtn
                type={'material'}
                icon={'favorite-border'}
                color={'grey'}
              />
              <Btn text={'Plant'} />
            </View>
          </View>
        </View>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    // backgroundColor: 'red',
  },
  bottomContainer: {
    // position: 'relative',
    // bottom: 0,
    backgroundColor: 'white',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
