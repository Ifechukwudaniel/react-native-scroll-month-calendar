/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainView : {
    flex:0,
    flexGrow:0,
    height:80,
    marginTop:40, 
    marginBottom:40,
    backgroundColor:'#ffffff',
   },
   flexRow:{
     flexDirection:'row',
   },
   content:{
       width: 150,
       fontSize:14,
       textAlign:'center', 
       opacity:1,
      //  fontFamily:"Brother1816-Medium",
       paddingTop:15,
   },
   monthView:{
       borderBottomWidth:1, 
       flexDirection:'row' , 
       borderColor:"#F2F2F3",
       flexWrap:"wrap",
   },
   monthText:{
      textAlign: 'center',
      fontSize: 20,
      width: 180,
      opacity:0.5,
      textAlignVertical:"center",
      // fontFamily:"Brother1816-Medium",
      paddingTop:11,
   }
  });
  
export default style;