import React, { useState, useEffect, useRef } from 'react'; 
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  Alert,
  ImageBackground,
  Animated,
  Switch,
  Modal,
  Pressable
} from 'react-native';

export default function Repaso() {
  const [cargando, setCargando] = useState(true);
  const desvanecido = useRef(new Animated.Value(1)).current;
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [esEncendido, cambiarEncendido] = useState(false);

  // Estado del modal (alerta personalizada)
  const [modalVisible, setModalVisible] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const mostrarAlerta = () => {
    if (nombre.trim() === '' && email.trim() === '') {
      setMensaje("Favor de llenar todos los campos");
      setModalVisible(true);
      return;
    }
    if (nombre.trim() === '') {
      setMensaje("Favor de llenar el campo de Nombre");
      setModalVisible(true);
      return;
    }
    if (email.trim() === '') {
      setMensaje("Favor de llenar el campo de Email");
      setModalVisible(true);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMensaje("Ingrese un correo electrónico válido");
      setModalVisible(true);
      return;
    }
    if (!esEncendido) {
      setMensaje("Debes aceptar los términos y condiciones");
      setModalVisible(true);
      return;
    }

    setMensaje(`Nombre: ${nombre}\nEmail: ${email}`);
    setModalVisible(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(desvanecido, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => setCargando(false));
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: desvanecido }]}>
        <ImageBackground
          source={require('../assets/Recursos/MAIN_IMAGE.jpg')}
          resizeMode="contain"
          style={styles.splashImage}
        >
          <Text style={styles.splashText}>LOADING.........</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/Recursos/LOGO_IMAGE.jpg')}
      resizeMode="cover"
      style={styles.background}>
      
      <View style={styles.textoContainer}>
        <Text style={styles.texto}>Registro de Usuario</Text>

        <TextInput
          placeholder="Nombre Completo"
          style={styles.input}
          placeholderTextColor="white"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          placeholder="Correo Electrónico"
          style={styles.input}
          placeholderTextColor="white"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View style={styles.terminos}>
          <Text style={{ color: 'white' }}>¿Aceptas términos y condiciones?</Text>
          <Switch value={esEncendido} onValueChange={cambiarEncendido} />
        </View>

        <Button
          color="#151716ff"
          title="Registrarse"
          onPress={mostrarAlerta}
        />
      </View>

      {/* MODAL DE ALERTA PERSONALIZADO */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
      >
        <View style={styles.modalFondo}>
          <View style={styles.modalContenido}>
            <Text style={styles.modalTexto}>{mensaje}</Text>

            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.botonModal}
            >
              <Text style={{ color: "#fff" }}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  texto: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  splashImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    position: 'absolute',
    fontSize: 20,
    color: '#333',
  },
  textoContainer: {
    width: '80%',
    backgroundColor: 'rgba(81, 78, 78, 0.7)',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    color: 'white',
    width: '100%',
    borderWidth: 2,
    borderColor: '#ffffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(143, 140, 140, 0.7)',
  },
  terminos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30,
  },

  /* Modal estilos */
  modalFondo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContenido: {
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center'
  },
  modalTexto: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center'
  },
  botonModal: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center'
  },
});
