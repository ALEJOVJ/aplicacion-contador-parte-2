
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function App() {
  return (
    <View style={estilos.contenedor}>

      <View style={estilos.tarjeta}>

        <Text style={estilos.titulo}>
          Interactividad con React Native
        </Text>

        <Text style={estilos.descripcion}>
          Aplicación móvil para contar Likes
          y registrar la hora de cada clic.
        </Text>

      </View>

    </View>
  );
}

const estilos = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    padding: 20,
  },

  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    elevation: 5,
  },

  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

  descripcion: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
    marginTop: 12,
  },

});

