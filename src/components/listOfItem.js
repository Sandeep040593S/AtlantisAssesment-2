import {StyleSheet, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import Task from './task';
const ListOfItem = props => {
  return (
    <View style={styles.items}>
      {props.taskItem.map(item => (
        <Task text={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 30,
  },
});

const mapsStatsToProps = state => ({
  taskItem: state.todos.taskItem,
});

export default connect(mapsStatsToProps)(ListOfItem);
