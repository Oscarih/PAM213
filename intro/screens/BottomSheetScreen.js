import{ Text, StyleSheet, View, Button,StatusBar,Pressable,Image} from 'react-native'
import React,{useRef,useMemo} from 'react'
import BottomSheet,{BottomSheetView} from '@gorhom/bottom-sheet'

export default function BottomSheetScreen(){
    const sheetRef=useRef('null');
    const snapPoints=useMemo(()=>["45%","75%","100%"]);

    const handlerCloSheet=()=>{
    sheetRef.current?.close();
    };
    const handlerOpenSheet=()=>{
    sheetRef.current?.snapToIndex(0);
    };
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Pantalla Principal</Text>

            <Button
                title='Abrir BottomSheet'
                onPress={handlerOpenSheet}
                color="#311c7cff"
            />
             <Button
                title='Cerrar BottomSheet'
                onPress={handlerCloSheet}
                color="red"
            />

            <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
                index={-1}
                enablePanDownToClose={true}
                handleIndicatorStyle={styles.handleIndicator}
            >
                <BottomSheetView style={styles.content}>
                    <StatusBar barStyle="dark-contemt"/>
                    <Image
                        source={require('../assets/Recursos/Fin2.jpeg')}
                        style={styles.gifstyle}
                        resizeMode='contain'
                    />
                    <Text style={styles.welcomeText}>!Bienvenido</Text>
                    <Text style={styles.bodyText}>
                        Este es un ejemplo de BotonesSheet
                    </Text>

                    <Pressable
                        style={styles.customButton}
                        onPress={handlerCloSheet}
                        >
                    <Text style={styles.customButtonText}>Entendido</Text>
                    </Pressable>
                </BottomSheetView>
           </BottomSheet>
        </View>
    );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white', 
    alignItems:'center',
    justifyContent:'center',
    gap: 15, 
  },
  headerText: {
    fontSize: 20,
    marginBottom: 20,
  },
  
  content: {
    flex: 1,
    backgroundColor: '#8c8a8aff',
    alignItems: 'center',
    padding: 20,
    gap: 15, 
  },
  handleIndicator: {
    backgroundColor: '#ccc', 
    width: 40,
  },
  gifStyle: { 
    width: 150, 
    height: 150, 
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e2e0e9ff',
    paddingTop: 0, 
  },
  bodyText: { 
    fontSize: 16,
    color: '#e2e0e9ff',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  customButton: { 
    backgroundColor: '#311c7cff', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25, 
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  customButtonText: { 
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});