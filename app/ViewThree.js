import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
} from 'react-native';

export default class ViewThree extends Component {

    constructor(props) {
        super(props);
        this.state = {firstName: ''};
        this.state = {lastName: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.firstText}
                    placeholder="First Name"
                    onChangeText={(firstName) => this.setState({firstName})}
                />

                <TextInput
                    style={styles.secondText}
                    placeholder="Last Name"
                    onChangeText={(lastName) => this.setState({lastName})}
                />

                <Button
                    onPress={() => { alert(this.state.firstName  + " " + this.state.lastName)}}
                    title="Submit"
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
        backgroundColor: '#F5FCFF',
    },
    firstText: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondText: {
        width: 100,
        height: 40,
        alignItems: 'center'
    },
});