import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  Animated,
} from "react-native";
import NFTCard from "../components/NFTCard";
import { COLORS, DATA, FONTS, SIZES } from "../constant";
const Home = () => {
    const [nftsData,setNftsData] = useState(DATA);
    return(
        <SafeAreaView style ={styles.container}>
           <View style ={{flex:1}} >
            <FlatList
            data={nftsData} renderItem ={({item}) => <NFTCard NFTData = {item}/>}
            keyExtractor = {(item) => item.id}
            />

           </View>
        </SafeAreaView>
    );
};

export default Home;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.bg,
    },
    notFoundContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: SIZES.xLarge,
    },
    notFoundText: {
      color: COLORS.white,
      fontFamily: FONTS.bold,
      fontSize: SIZES.xLarge,
    },
  });
  