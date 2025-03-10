import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UsuarioMenu = () => {
  return (
    <View className="h-full w-full bg-white p-4 rounded-3xl overflow-hidden">
      <Text className="text-black text-2xl font-semibold mt-12 ml-8">
        ¿Qué haremos el día de hoy?
      </Text>

      {/* Opciones principales */}
      <View className="flex-row justify-between mt-12 px-8">
        <TouchableOpacity className="w-40 h-40 bg-gray-200 rounded-xl flex justify-center items-center">
          <Image source={require('../../assets/images/viajes.png')} className="w-24 h-24" />
          <Text className="text-black font-semibold mt-2">Viajes</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-40 h-40 bg-gray-200 rounded-xl flex justify-center items-center">
          <Image source={require('../../assets/images/Package.png')} className="w-24 h-24" />
          <Text className="text-black font-semibold mt-2 text-center">Enviar paquetería</Text>
        </TouchableOpacity>
      </View>

      {/* Historial de viajes */}
      <Text className="text-black text-xl font-semibold mt-16 ml-8">Historial de viajes</Text>
      <View className="mt-4 px-8">
        <View className="flex-row items-center py-2 border-b border-gray-300">
          <View className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
            <Image source={require('../../assets/images/Car.png')} className="w-6 h-6" />
          </View>
          <View className="ml-4">
            <Text className="text-black text-lg font-semibold">Sitio</Text>
            <Text className="text-gray-500 text-sm">$60 - 20/01/2025</Text>
          </View>
        </View>
        <View className="flex-row items-center py-2">
          <View className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
          <Image source={require('../../assets/images/Car.png')} className="w-6 h-6" />
          </View>
          <View className="ml-4">
            <Text className="text-black text-lg font-semibold">Parque - Club</Text>
            <Text className="text-gray-500 text-sm">$100 - 19/01/2025</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UsuarioMenu;
