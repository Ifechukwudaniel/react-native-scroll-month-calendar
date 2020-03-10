/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useRef,useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style'

function ScrollMonthCalender({history, enableDefaultStyles , onMonthChange}){
    const scrollViewRef = useRef();
    const [monthNumber, setMonthNumber] = useState(0)
    const [heightArray , setArray ]= useState([]);
    let offset= 0
    useEffect(()=>{
        if(monthNumber>11)
          setMonthNumber(0)
          scrollViewRef.current.scrollTo({
            x: heightArray[monthNumber]-100,
            y:0,
            animated: true,
        });
        onMonthChange()
    },[monthNumber])

    return (
       <View style={styles.mainView}>
          <View style= {styles.flexRow} >
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={0}
                ref={scrollViewRef}
                onMomentumScrollBegin={
                    (e)=>{
                        var currentOffset = e.nativeEvent.contentOffset.x;
                        var direction = currentOffset > offset ? 'left' : 'right';
                        offset = currentOffset;
                        if(direction==="left"){
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
                                  <Text style={[styles.monthText,{marginLeft:100,opacity:i==monthNumber?1:0.5 }]}>{item.month}</Text>
                            </View>)
                         }
                         if(i === history.length - 1) {
                           return  (<View key={i} 
                            style={styles.monthView}
                            onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            heightArray[i] = layout.x
                            }}>
                                 <Text style={[styles.monthText,{marginRight:100, opacity:i==monthNumber?1:0.5 }]}>{item.month}</Text>
                            </View>)
                         }
                         else 
                            return  (<View key={i} 
                                style={styles.monthView}
                                onLayout={event => {
                                const layout = event.nativeEvent.layout;
                                heightArray[i] = layout.x
                                }}>
                                    <Text style={[styles.monthText, {opacity:i==monthNumber?1:0.5 }]}>{item.month}</Text>
                                </View>)
                        })
                    }
                </ScrollView>
          </View>
                <View style={{flex:1, alignSelf:"center"}}>
                    <Text style= {styles.task}>{history[monthNumber]?history[monthNumber].task:0 } Tasks  Completed </Text>
                </View>
        </View>
    );
}
 
ScrollMonthCalender.defaultProps = {
   history:[{month:"January", task: 10},
   {month:"February", task:20},
   {month:"March", task:1},
   {month:"April", task:44},
   {month:"May", task:77},
   {month:"June", task:9},
   {month:"July", task:27},
   {month:"August", task:0},
   {month:"September", task:8},
   {month:"October", task:2},
   {month:"November", task:7},
   {month:"December", task:26}],
   enableDefaultStyles:true,
}


export default ScrollMonthCalender