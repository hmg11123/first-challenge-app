import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/** =============== Top ============== */}
      <View style={styles.topWrapper}>
        <Text style={styles.title}>React-Native</Text>
      </View>

      {/** =============== Bottom ============== */}
      <View style={styles.bottomWrapper}>
        {/** =============== Left ============== */}
        <View style={styles.leftWrapper}></View>

        {/** =============== Right ============== */}
        <View style={styles.rightWrapper}>
          {/** =============== RightTop ============== */}
          <View style={styles.rightTopWrapper}></View>

          {/** =============== RightBottom ============== */}
          <View style={styles.rightBottomWrapper}>
            <TouchableOpacity style={styles.rightBottomBtn}>
              <Button color="white" title="Start!"></Button>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `black`,
  },
  title: {
    fontSize: 20,
  },
  topWrapper: {
    flex: 1,
    backgroundColor: `yellow`,
    justifyContent: `center`,
    alignItems: `flex-start`,
    padding: 20,
  },
  bottomWrapper: {
    flex: 3,
    flexDirection: `row`,
  },
  leftWrapper: {
    flex: 1,
    backgroundColor: `red`,
  },
  rightWrapper: {
    flex: 1,
  },
  rightTopWrapper: {
    flex: 1,
    backgroundColor: `blue`,
  },
  rightBottomWrapper: {
    flex: 1,
    backgroundColor: `black`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  rightBottomBtn: {
    width: 100,
    height: 50,
    backgroundColor: `#0be`,
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`,
  },
});

export default App;
