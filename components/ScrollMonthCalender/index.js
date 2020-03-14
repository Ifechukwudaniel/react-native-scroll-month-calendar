/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useRef,useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, Animated} from 'react-native';
import styles from './style'
// import Animated from 'react-native-reanimated';

function ScrollMonthCalender({history, enableDefaultStyles , onMonthChange, monthTextStyle, contentTextStyle, style}){
    const scrollViewRef = useRef();
    const [monthNumber, setMonthNumber] = useState(0)
    const [heightArray , setArray ]= useState([]);
    const [scrollX, setScrollX] = useState( new Animated.Value(0))
    let offset= 0
    useEffect(()=>{
        if (monthNumber<0) 
         setMonthNumber(0)

        if(monthNumber>11)
          setMonthNumber(11)
        scrollViewRef.current.getNode().scrollTo({x:heightArray[monthNumber]-100, y:0})
        onMonthChange()
    },[monthNumber])

    return (
       <View style={[styles.mainView, style]}>
          <View style= {styles.flexRow} >
                <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={8}
                ref={scrollViewRef}
                onScrollEndDrag={
                    (e)=>{
                        var currentOffset = e.nativeEvent.contentOffset.x;
                        offset= heightArray[monthNumber]
                        var direction = currentOffset <= offset || currentOffset <= offset-300 ? 'left' : 'right';
                        offset = currentOffset;
                        if(direction==="left"){
                            setMonthNumber(monthNumber-1)
                        }
                         if(direction==="right"){
                            setMonthNumber(monthNumber+1)
                        }
                       
                    }
                }
                >
                    {
                        history.map((item , i)=>{   
                         if(i===0) {
                           return  (<View key={i} 
                            style={styles.monthView}
                            onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            heightArray[i] = layout.x
                            }}>
                                  <Text style={[styles.monthText,{marginLeft:100,opacity:i==monthNumber?1:0.5 }, monthTextStyle]}>{item.month}</Text>
                            </View>)
                         }
                         if(i === history.length - 1) {
                           return  (<View key={i} 
                            style={styles.monthView}
                            onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            heightArray[i] = layout.x
                            }}>
                                 <Text style={[styles.monthText,{marginRight:100, opacity:i==monthNumber?1:0.5 },monthTextStyle]}>{item.month}</Text>
                            </View>)
                         }
                         else 
                            return  (<View key={i} 
                                style={styles.monthView}
                                onLayout={event => {
                                const layout = event.nativeEvent.layout;
                                heightArray[i] = layout.x
                                }}>
                                    <Text style={[styles.monthText, {opacity:i==monthNumber?1:0.5 },monthTextStyle]}>{item.month}</Text>
                                </View>)
                        })
                    }
                </Animated.ScrollView>
          </View>
                <View style={{flex:1, alignSelf:"center"}}>
                    <Text style= {[styles.content,]}>{history[monthNumber]?history[monthNumber].content:"" }</Text>
                </View>
        </View>
    );
}
 
ScrollMonthCalender.defaultProps = {
   history:[{month:"January", content: "jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"February", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"March", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"April", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"May", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"June", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"July", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"August", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"September", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"October", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"November", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"},
   {month:"December", content:"jdjjdjdjdjdjdjdjdjdjdjdjd"}],
   enableDefaultStyles:true,
   monthTextStyle:{},
   contentTextStyle:{},
   style:{}
}


export default ScrollMonthCalender