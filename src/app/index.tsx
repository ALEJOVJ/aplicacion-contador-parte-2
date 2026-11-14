
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

  // Estado para guardar los registros de los clics
  const [registros, setRegistros] = useState<
    { numero: number; hora: string }[]
  >([]);

  // Función para aumentar el contador y registrar la hora
  const incrementarContador = () => {

    const nuevoContador = contador + 1;

    setContador(nuevoContador);

    // Obtener la hora exacta del dispositivo
    const fecha = new Date();

    const hora = [
      fecha.getHours(),
      fecha.getMinutes(),
      fecha.getSeconds()
    ]
      .map(valor => String(valor).padStart(2, '0'))
      .join(':');

    // Crear el registro del clic
    const nuevoRegistro = {
      numero: nuevoContador,
      hora: hora
    };

    // Guardar el registro
    setRegistros(prev => [nuevoRegistro, ...prev]);
  };

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

        {/* Contador */}
        <Text style={estilos.contador}>
          {contador}
        </Text>

        {/* Botón de Likes */}
        <TouchableOpacity
          style={estilos.botonLike}
          onPress={incrementarContador}
        >
          <Text style={estilos.textoBoton}>
            ¡Haz Clic Aquí!
          </Text>
        </TouchableOpacity>

        <View style={estilos.areaBotones}>
          <Text style={estilos.textoInformativo}>
            Total de registros: {registros.length}
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

  botonLike: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
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





