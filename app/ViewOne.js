import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
} from 'react-native';

export default class ViewOne extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40,width: 100}}
                    placeholder="Hint"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button
                    onPress={() => { alert(this.state.text)}}
                    title="Save"
                />
            </View>
        );
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#33F6FF',
        },
    });