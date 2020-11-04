import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

 
export default class FacebookButton extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <TouchableOpacity style={[styles.ButtonContainer, this.props.style]}
                        onPress={this.props.onPress}
      >
        <Image source={require('./btn_facebook.png')}
               style={styles.facebookButton} />
        {/* <Text style={styles.footerButtonText}>{this.props.buttonText}</Text>   */}
      </TouchableOpacity>
    );
  }
}
 
const styles = StyleSheet.create({
  facebookButton: {
    marginTop:10,
    maxWidth : 250,
    maxHeight:35,
    width: 315,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerButtonText: {
    position: 'absolute',
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
  },
  ButtonContainer: {
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});