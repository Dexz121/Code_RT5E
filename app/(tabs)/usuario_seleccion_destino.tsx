import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const UsuarioSeleccionDestino = () => {
  return (
    <View className="h-full w-full bg-white rounded-3xl overflow-hidden">
      {/* Encabezado */}
      <View className="w-full h-40 bg-green-600 flex justify-center items-center">
        <Text className="text-white text-2xl font-normal">SELECCIONA TU DESTINO</Text>
      </View>
      
      {/* Mapa Placeholder */}
      
      
      {/* Detalles del viaje */}
      <View className="bg-white absolute bottom-0 w-full h-60 p-6">
        <View className="flex-row justify-between items-center">
          <Text className="text-black text-2xl">Viaje</Text>
          <Text className="text-black text-2xl">$48</Text>
        </View>
        <View className="border-b border-gray-300 my-4"></View>
        <View className="flex-row justify-center">
          <Text className="text-black text-2xl">EFECTIVO</Text>
        </View>
        
        {/* Botón de Solicitar */}
        <TouchableOpacity className="bg-yellow-500 rounded-xl mt-6 py-3 mx-6">
          <Text className="text-white text-center text-2xl font-normal">SOLICITAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UsuarioSeleccionDestino;