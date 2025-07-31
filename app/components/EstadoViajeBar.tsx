import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  estado: string; // "solicitado", "abordo", "concluido", etc.
  uid_conductor?: string | null;
};

const estados = [
  'Viaje solicitado',
  'Viaje aceptado',
  'Conductor en curso',
  'Abordo',
  'Concluido',
];

export default function EstadoViajeBar({ estado, uid_conductor }: Props) {
  const getEstadoActivo = (): number => {
    if (estado === 'concluido') return 4;
    if (estado === 'abordo') return 3;
    if (uid_conductor) return 2;
    return 0;
  };

  const activo = getEstadoActivo();

  return (
    <View className="flex-row justify-between items-start px-2 mb-2 w-full max-w-md">
      {estados.map((label, index) => {
        const isActive = index <= activo;
        return (
          <View key={label} className="flex-1 items-center">
            <View
              className={`w-3 h-3 rounded-full mb-1 ${
                isActive ? 'bg-orange-600' : 'bg-gray-300'
              }`}
            />
            <Text
              className={`text-[10px] text-center leading-3 ${
                isActive ? 'text-orange-700 font-semibold' : 'text-gray-500'
              }`}
            >
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
