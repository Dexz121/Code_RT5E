import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const IndexScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="h-full w-full bg-gray-100">
      <View className="flex-1 p-4">
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          {[
            { label: 'Usuario Menu', route: '/(tabs)/usuario_menu' },
            { label: 'Seleccion Destino', route: '/(tabs)/usuario_seleccion_destino' },
            { label: 'Busqueda Taxi', route: '/(tabs)/usuario_busqueda_taxi' },
            { label: 'Conductor Inicio', route: '/(tabs)/conductor_botones_inicio' },
            { label: 'Conductor Conectado', route: '/(tabs)/conductor_conectado' },
            { label: 'Conductor Menu', route: '/(tabs)/conductor_menu' }
          ].map(({ label, route }) => (
            <TouchableOpacity
              key={route}
              className="bg-blue-500 p-4 rounded-xl m-2 w-3/4 shadow-md"
              onPress={() => router.push(route as const)}
            >
              <Text className="text-white text-center font-semibold">{label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default IndexScreen;
