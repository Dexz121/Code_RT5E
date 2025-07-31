import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  noEconomico?: string;
  vehiculo?: string;
  nombre?: string;
  modelo?: string;
  placas?: string;
};

export default function DatosConductor({
  noEconomico = 'No disponible',
  vehiculo = 'No disponible',
  nombre = 'No disponible',
  modelo = 'No disponible',
  placas = 'No disponible',
}: Props) {
  return (
    <View className="w-full max-w-md bg-white rounded-lg p-4 mb-6">
      <Text className="text-sm font-bold mb-4 text-center text-gray-800">DATOS CONDUCTOR</Text>

      <View className="flex-row justify-between mb-3">
        <View className="flex-1 mr-2">
          <Text className="text-[10px] text-gray-500">Número económico:</Text>
          <Text className="bg-cyan-800 text-white text-xs px-2 py-1 rounded text-center">
            {noEconomico}
          </Text>
        </View>
        <View className="flex-1 ml-2">
          <Text className="text-[10px] text-gray-500">Vehículo:</Text>
          <Text className="bg-cyan-800 text-white text-xs px-2 py-1 rounded text-center">
            {vehiculo}
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between mb-3">
        <View className="flex-1 mr-2">
          <Text className="text-[10px] text-gray-500">Nombre:</Text>
          <Text className="bg-cyan-800 text-white text-xs px-2 py-1 rounded text-center">
            {nombre}
          </Text>
        </View>
        <View className="flex-1 ml-2">
          <Text className="text-[10px] text-gray-500">Modelo:</Text>
          <Text className="bg-cyan-800 text-white text-xs px-2 py-1 rounded text-center">
            {modelo}
          </Text>
        </View>
      </View>

      <View>
        <Text className="text-[10px] text-gray-500">Placas:</Text>
        <Text className="bg-cyan-800 text-white text-xs px-2 py-1 rounded text-center">
          {placas}
        </Text>
      </View>
    </View>
  );
}
