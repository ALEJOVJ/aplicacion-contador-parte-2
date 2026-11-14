
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const [registros, setRegistros] = useState<
    { numero: number; hora: string }[]
  >([]);

  const incrementarContador = () => {
    const nuevoContador = contador + 1;
    setContador(nuevoContador);

    const fecha = new Date();

    const hora = [
      fecha.getHours().toString().padStart(2, '0'),
      fecha.getMinutes().toString().padStart(2, '0'),
      fecha.getSeconds().toString().padStart(2, '0'),
    ].join(':');

    const nuevoRegistro = {
      numero: nuevoContador,
      hora: hora,
    };

    setRegistros((prev) => [nuevoRegistro, ...prev]);
  };

  const restarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const reiniciarContador = () => {
    setContador(0);
    setRegistros([]);
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>Contador de Likes</Text>

        <Text style={styles.descripcion}>
          Presiona los botones para modificar el contador.
        </Text>

        <Text style={styles.contador}>{contador}</Text>

        <View style={styles.filaBotones}>
          <TouchableOpacity
            style={styles.boton}
            onPress={incrementarContador}
          >
            <Text style={styles.textoBoton}>+ Agregar Like</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonRestar}
            onPress={restarContador}
          >
            <Text style={styles.textoBoton}>- Restar Like</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonReiniciar}
            onPress={reiniciarContador}
          >
            <Text style={styles.textoBoton}>Reiniciar contador</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitulo}>Historial de Likes</Text>

        <View style={styles.encabezadoTabla}>
          <Text style={styles.textoEncabezado}>N.º Clic</Text>
          <Text style={styles.textoEncabezado}>Hora</Text>
        </View>

        <ScrollView style={styles.lista}>
          {registros.map((item, index) => (
            <View style={styles.fila} key={index}>
              <Text style={styles.textoFila}>{item.numero}</Text>
              <Text style={styles.textoFila}>{item.hora}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#eaf2f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tarjeta: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#023059',
  },
  descripcion: {
    fontSize: 14,
    color: '#555',
    marginVertical: 15,
  },
  contador: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#3498db',
    marginVertical: 15,
  },
  filaBotones: {
    width: '100%',
    gap: 10,
  },
  boton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonRestar: {
    backgroundColor: '#e67e22',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonReiniciar: {
    backgroundColor: '#c0392b',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    color: '#023059',
  },
  encabezadoTabla: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#1B6C8C',
    padding: 10,
  },
  textoEncabezado: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  lista: {
    width: '100%',
    maxHeight: 200,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textoFila: {
    fontSize: 15,
    color: '#333',
  },
});





