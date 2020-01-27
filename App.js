import React, { Component } from 'react';

import { StyleSheet, View, Platform, Text } from 'react-native';

import { RadioGroup } from 'react-native-btr';

export default class App extends Component<{}> {

  constructor() {

    super();

    this.state = {

      radioButtons: [
        {
          label: 'Apple',
          value: 'Apple',
          checked: true,
          color: '#F44336',
          disabled: false,
          flexDirection: 'row',
          size: 11

        },

        {
          label: 'Mango',
          value: 'Mango',
          checked: false,
          color: '#FF8F00',
          disabled: false,
          flexDirection: 'row',
          size: 11

        },

        {
          label: 'Banana',
          value: 'Banana',
          checked: false,
          color: '#1B5E20',
          disabled: false,
          flexDirection: 'row',
          size: 11

        }

      ]

    }

  }

  render() {

    let selectedItem = this.state.radioButtons.find(e => e.checked == true);
    selectedItem = selectedItem ? selectedItem.value : this.state.radioButtons[0].value;

    return (

      <View style={styles.MainContainer}>

        <RadioGroup
          color='#0277BD'
          labelStyle={{ fontSize: 14, }}
          radioButtons={this.state.radioButtons}
          onPress={radioButtons => this.setState({ radioButtons })}
          style={{ paddingTop: 20 }}
        />

        <View style={styles.selectedItemView}>

          <Text style={styles.selectedText}>Selected Item: {selectedItem}</Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,

  },

  selectedItemView:
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 14,
        backgroundColor: '#263238',
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    selectedText:
    {
        fontSize: 17,
        color: '#fff'
    }
});