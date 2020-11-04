import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import FooterButton from './component/FooterButton';
import KakaoButton from './component/KakaoButton';
import FacebookButton from './component/FacebookButton';
import NaverButton from './component/NaverButton';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idText: '아이디',
            pwText: '비밀번호',
            id: '',
            pw: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./icon.png')} style={styles.icon} />
                <Text style={styles.welcomeText}>로그인</Text>
                <TextInput style={styles.textInputButton}
                    onChangeText={(id) => this.setState({ id })}
                    placeholder={this.state.idText}
                    autoCorrect={false}
                />
                <TextInput style={styles.textInputButton}
                    onChangeText={(pw) => this.setState({ pw })}
                    placeholder={this.state.pwText}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <FooterButton buttonText="로그인" style={styles.loginButton}
                    onPress={() => { }}
                />
                <NaverButton style={styles.naverButton}
                    onPress={() => { }}
                />
                <FacebookButton style={styles.facebookButton}
                    onPress={() => { }}
                />
                <KakaoButton style={styles.kakaoButton}
                    onPress={() => { }}
                />

                <View style={styles.elem}>

                    <TouchableOpacity>
                        <Text style={styles.noAccountText}>아이디 찾기</Text>
                    </TouchableOpacity>

                    <Text style={styles.noAccountText}>&nbsp;&nbsp;|&nbsp;&nbsp; </Text>

                    <TouchableOpacity>
                        <Text style={styles.noAccountText}>비밀번호 찾기</Text>
                    </TouchableOpacity>

                    <Text style={styles.noAccountText}>&nbsp;&nbsp;|&nbsp;&nbsp; </Text>

                    <TouchableOpacity>
                        <Text style={styles.noAccountText}>회원가입</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity>
                    <Text style={styles.makeAccountText}>계정 만들기</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8d8d8',
    },
    icon: {
        width: 210,
        height: 80,
        marginBottom: 50,
    },
    btn: {
        width: 288,
        marginTop: 20,
        height: 50,
    },
    welcomeText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 23,
    },
    textInputButton: {
        width: 288,
        borderColor: 'gray',
        paddingVertical: 10,
        borderWidth: 0.3,
        paddingHorizontal: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 50,
    },
    loginButton: {
        width: 315,
        height: 50,
        marginTop: 20,
        
    },
    elem: {
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#eee',
        //borderBottomWidth:0.5,
        padding: 5,
    },
    noAccountText: {
        paddingLeft: 1,
        marginTop: 5,
        fontSize: 12,
        color: '#5b5a5a'
    },
    makeAccountText: {
        //paddingLeft: 50,
        fontSize: 12,
        color: '#9013fe'
    }
});