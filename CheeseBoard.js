import React from 'react';
import { StyleSheet, View } from 'react-native';

const ChessBoard = () => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <View style={styles.board}>
      {rows.map((row, index) => (
        <View style={styles.row} key={index}>
          {columns.map((column, index) => (
            <View style={[styles.square, (index + row) % 2 === 0 ? styles.black : styles.white]} key={index} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#black',
    borderWidth: 2,
    borderColor: '#black',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  square: {
    flex: 1,
  },
  black: {
    backgroundColor: '#855E42',
  },
  white: {
    backgroundColor: '#white',
  },
});

export default ChessBoard;