
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

  // Estado para guardar los registros
  const [registros, setRegistros] = useState<
    { numero: number; hora: string }[]
  >([]);

  // Función para aumentar el contador y registrar la hora
  const incrementarContador = () => {

    const nuevoContador = contador + 1;

    setContador(nuevoContador);

    // Obtener la hora del dispositivo
    const fecha = new Date();

    const hora = [
      fecha.getHours(),
      fecha.getMinutes(),
      fecha.getSeconds()
    ]
      .map(valor => String(valor).padStart(2, '0'))
      .join(':');

    // Crear nuevo registro
    const nuevoRegistro = {
      numero: nuevoContador,
      hora: hora
    };

    // Guardar el registro al inicio de la lista
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

        {/* Tabla de registros */}
        <View style={estilos.tabla}>

          {/* Encabezados */}
          <View style={estilos.encabezado}>
            <Text style={estilos.columna}>
              N.º Clic
            </Text>

            <Text style={estilos.columna}>
              Hora
            </Text>
          </View>

          {/* Contenido de la tabla */}
          <ScrollView style={estilos.cuerpoTabla}>

            {registros.map((item, index) => (

              <View key={index} style={estilos.fila}>

                <Text style={estilos.celda}>
                  {item.numero}
                </Text>

                <Text style={estilos.celda}>
                  {item.hora}
                </Text>

              </View>

            ))}

          </ScrollView>

        </View>

        <Text style={estilos.textoInformativo}>
          Total de registros: {registros.length}
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
    marginBottom: 20,
  },

  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  tabla: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 6,
    overflow: 'hidden',
  },

  encabezado: {
    flexDirection: 'row',
    backgroundColor: '#f5f6f7',
    padding: 12,
  },

  columna: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#555555',
  },

  cuerpoTabla: {
    maxHeight: 200,
  },

  fila: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#eeeeee',
  },

  celda: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
  },

  textoInformativo: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginTop: 15,
  },

});





