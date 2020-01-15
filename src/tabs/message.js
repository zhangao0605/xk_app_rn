import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {px2W_react} from '../utils/px2_react'

export default class HelloWorldApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {'title': '系统通知', 'con': '时间：恭喜您注册成功！开启您的分享赚钱的财富之旅吧！', 'time': '2019-09-09 12:00:00'},
                {'title': '贡献值通知', 'con': '时间：恭喜您注册成功！开启您的分享赚钱的财富之旅吧ssss！', 'time': '2019-09-09 12:00:00'},
                {
                    'title': '上线一周年通知',
                    'con': '时间：恭喜您注册成功！开启您的分享赚钱的财富之旅吧！sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss' +
                        '…',
                    'time': '2019-09-09 12:00:00'
                },
            ]
        }
    }

    render() {
        return (
            <View style={styles.contaner}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                        <View style={styles.mes_block}>
                            <Text style={styles.mes_block_title}>{item.title}</Text>
                            <Text style={styles.mes_block_con}>{item.con}</Text>
                            <Text style={styles.mes_block_time}>{item.time}</Text></View>
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contaner: {
        padding: px2W_react(16, 375)
    },
    mes_block: {
        paddingTop: px2W_react(18.5, 375),
        paddingBottom: px2W_react(18.5, 375),
        paddingLeft: px2W_react(20, 375),
        paddingRight: px2W_react(20, 375),
        backgroundColor: '#FFFFFF',
        borderRadius: px2W_react(4, 375),
        marginBottom: px2W_react(10, 375),
    },
    mes_block_title: {
        color: '#222222',
        fontSize: px2W_react(16, 375)
    },
    mes_block_con: {
        color: '#666666',
        fontSize: px2W_react(13, 375),
        marginTop: px2W_react(10, 375),
        lineHeight: 20
    },
    mes_block_time: {
        color: '#999999',
        fontSize: px2W_react(12, 375),
        marginTop: px2W_react(10, 375),
    },
});


