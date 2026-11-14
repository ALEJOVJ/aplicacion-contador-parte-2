
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {

  // Estado inicial del contador
  const [contador, setContador] = useState(0);

  return (
    <View style={estilos.contenedor}>

      <View style={estilos.tarjeta}>

        <Text style={estilos.titulo}>
          Interactividad con React Native
        </Text>

        <Text style={estilos.descripcion}>
          Haz clic en el botón para incrementar
          el contador y registrar la hora exacta.
        </Text>

        {/* Contador dinámico */}

        <Text style={estilos.contador}>
          {contador}
        </Text>

        <View style={estilos.areaBotones}>
          <Text style={estilos.textoInformativo}>
            Contador de Likes
          </Text>
        </View>

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
    marginBottom: 12,
  },

  descripcion: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 20,
  },

  contador: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
    marginVertical: 15,
  },

  areaBotones: {
    alignItems: 'center',
    marginTop: 10,
  },

  textoInformativo: {
    fontSize: 15,
    color: '#555555',
    fontWeight: '600',
  },

});



