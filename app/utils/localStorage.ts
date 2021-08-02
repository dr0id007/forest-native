import AsyncStorage from '@react-native-async-storage/async-storage';
const localStorageName = 'session';

export const saveToLocalStorage = async <Type>(arg: Type): Promise<boolean> => {
  console.log('arg', arg, typeof arg);

  // await clearKeyFromLocalStorage(localStorageName);

  try {
    if (arg !== undefined) {
      console.log('args:', arg);
      const prev = await AsyncStorage.getItem(localStorageName);
      let a = prev ? JSON.parse(prev) : [];
      // a.push(arg);
      // add to starting of array
      a.unshift(arg);
      await AsyncStorage.setItem(localStorageName, JSON.stringify(a));
      return true;
    }
  } catch (e) {
    console.log('e:', e);
  }
  return false;
};

export const fetchFromLocalStorage = async <Type>(): Promise<
  Type[] | undefined
> => {
  try {
    const res = await AsyncStorage.getItem(localStorageName);
    if (res) return JSON.parse(res);
  } catch (e) {
    console.log('e:', e);
  }
};

export const removeFromLocalStorage = async (arg: string): Promise<void> => {
  await AsyncStorage.removeItem(arg);
};

export const getAllKeysFromLocalStorage = async (): Promise<string[]> => {
  let res = [];
  res = await AsyncStorage.getAllKeys();
  return res;
};

export const clearKeyFromLocalStorage = async (key: string): Promise<void> => {
  const res = await AsyncStorage.removeItem(key);
  console.log('res', res);
};

// export const clearLocalStorage = async (): Promise<void> => {};
