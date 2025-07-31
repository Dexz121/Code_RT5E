// app/flow_viaje/index.tsx
//
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import EstadoViajeBar from '../components/EstadoViajeBar';
import BotonPanico from '../components/BotonPanico';
import DatosConductor from '../components/DatosConductor';

const estadosDisponibles = [
  { estado: 'solicitado', uid_conductor: null },
  { estado: 'solicitado', uid_conductor: 'abc123' },
  { estado: 'abordo', uid_conductor: 'abc123' },
  { estado: 'concluido', uid_conductor: 'abc123' },
];

export default function FlowViajeIndex() {
  const [indexEstado, setIndexEstado] = useState(0);

  const viajeActual = estadosDisponibles[indexEstado];

  const avanzarEstado = () => {
    setIndexEstado((prev) => (prev + 1) % estadosDisponibles.length);
  };

  return (
    <ScrollView
      className="bg-white"
      contentContainerStyle={{ padding: 20, alignItems: 'center' }}
    >
      <Text className="text-2xl font-bold text-black mb-4">
        Simulación de Estados del Viaje
      </Text>

      {/* Componente de barra de progreso */}
      <EstadoViajeBar
        estado={viajeActual.estado}
        uid_conductor={viajeActual.uid_conductor}
      />

      <Text className="text-lg mt-4 text-gray-800">
        Estado actual: <Text className="font-bold">{viajeActual.estado}</Text>
      </Text>

      <TouchableOpacity
        className="bg-cyan-700 px-6 py-3 rounded-xl mt-6"
        onPress={avanzarEstado}
        >
        <Text className="text-white font-semibold">Cambiar estado</Text>
    </TouchableOpacity>


        {/* Datos del conductor */}
        <DatosConductor
          noEconomico="TX-002"
          vehiculo="Nissan Versa"
          nombre="Juan Pérez"
          modelo="2022"
          placas="XYZ-123"
        />
        {/* Costo */}
        <View className="mb-4">
          <Text className="text-sm">Costo de viaje:</Text>
          <View className="bg-cyan-800 h-8 rounded mt-1" />
        </View>

        {/* Botón de pánico */}
        <View className="flex-1 justify-center items-center bg-white">
          <BotonPanico />
        </View>

      
    </ScrollView>
    
  );
}
