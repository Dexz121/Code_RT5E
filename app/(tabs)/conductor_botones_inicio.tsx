import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import "../../global.css";

const UsuarioSeleccionDestino = () => {
  return (
    <View className="flex-1 bg-white rounded-3xl overflow-hidden">
      {/* Encabezado */}
      <View className="w-full h-40 bg-green-600 flex justify-center items-center">
        <Text className="text-white text-2xl font-bold">CONECTARSE</Text>
      </View>

      {/* Foto de perfil */}
      <View className="absolute top-10 right-6">
        <Image source={require('../../assets/images/profile.svg')} className="w-24 h-24 rounded-full" />
      </View>

      {/* Botón flotante */}
      <View className="absolute top-16 left-6 w-16 h-16 bg-green-600 rounded-full flex justify-center items-center">
        <Text className="text-white text-lg font-medium">////</Text>
      </View>

      {/* Botón circular de conexión */}
      <View className="absolute bottom-24 left-20 w-48 h-48 bg-blue-900 border-2 border-green-400 rounded-full flex justify-center items-center shadow-lg">
        <Text className="text-white text-2xl font-bold">CONECTARSE</Text>
      </View>

      {/* Contenedor inferior */}
      <View className="bg-green-600 absolute bottom-0 w-full h-24 flex justify-center items-center">
        <Text className="text-white text-2xl font-bold">CONECTARSE</Text>
      </View>
    </View>
  );
};

export default UsuarioSeleccionDestino;