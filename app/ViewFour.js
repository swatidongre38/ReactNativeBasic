import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';

export default class ViewFour extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton}>
                    <Text> Button 1</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._onPressButton}>
                    <Text> Button 2</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33F6FF',
    },
});