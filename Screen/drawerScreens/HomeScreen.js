import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <Image style={styles.stretch}
            source={require('../../Image/dicegame.png')}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dicegame')}>
        <Text style={styles.texty}>Dicegame</Text>
      </TouchableOpacity>        
      
      <Image style={styles.stretch}
            source={require('../../Image/currency-img.jpg')}/>
      
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('CurrencyConverter')}>
      <Text style={styles.texty}>Currency Converter</Text>
      </TouchableOpacity>
      
      <Image style={styles.stretch}
            source={require('../../Image/weather.png')}/>
      
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('CurrencyConverter')}>
      <Text style={styles.texty}>Weather</Text>
      </TouchableOpacity>
      
      <Image style={styles.stretch}
            source={require('../../Image/calculator.png')}/>
      
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('CurrencyConverter')}>
      <Text style={styles.texty}>Calculator</Text>
      </TouchableOpacity>
      
      <Image style={styles.stretch}
            source={require('../../Image/notepad.png')}/>
      
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('CurrencyConverter')}>
      <Text style={styles.texty}>Notepad</Text>
      </TouchableOpacity>
     </View>   
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
stretch: {
  flex: 1, 
  height: 50,
  width: 420,
},
button: {
  alignItems: "center",
  backgroundColor: "#00587a",
  padding: 4,
},

texty:{
  fontWeight: "bold",
  color:"#e7e7de"
},
});

export default HomeScreen;