import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import { Svg, Path } from 'react-native-svg'


 const CustomTabBarButton = props =>  {
    const {children, accessibilityState,  onPress} = props;
    if (accessibilityState.selected) {
        return (
            <View style={styles.btnwrapper}>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.svggapFiller}/>
                <Svg width={71} height={58} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.primary}
            />
            </Svg>
            <View style={styles.svggapFiller}/>
            </View>
            <TouchableOpacity  activeOpacity={1} onPress={onPress} style={styles.activebtn}>
              <Text>{children}</Text>
            </TouchableOpacity>
            </View>
          )
        } else{
            return (
                <TouchableOpacity onPress={onPress} style={styles.inactivebtn}>
                  <Text>{children}</Text>
                </TouchableOpacity>
              )
        }
    }
 
 
export default CustomTabBarButton;

const styles =  StyleSheet.create({

    btnwrapper:{
        flex:1,
        alignItems:"center"
    },
    inactivebtn:{
        flex:1 ,
        backgroundColor:COLORS.primary,
        alignItems:"center",
        justifyContent:"center",
    },

    activebtn:{
        position:"absolute",
        width:52,
        height:52,
        borderRadius:50/2,
        backgroundColor:COLORS.primary,
        alignItems:"center",
        justifyContent:"center",
        top:-22,
        paddingTop:6,
        paddingLeft:3,
    },
    svggapFiller:{
        flex:1,
        backgroundColor:COLORS.primary,
    },
})
