import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Appbar,Title} from 'react-native-paper'

 function Header({disable,onPress,titleText}){

    return(
        <Appbar.Header style = {styles.headerContainer}>
            <Appbar.BackAction
                onPress={onPress}
                disabled={disable}
            />
            <View style = {styles.container}>
               <Title style = {styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
 }
const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#219653'
    },
    container:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#fff'
    }
});
export default Header;
