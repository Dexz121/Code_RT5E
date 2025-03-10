import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import "../../global.css";

const IndexScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      <Text className="text-black text-2xl font-bold mb-6">Menú Principal</Text>
      {[
        { label: "Usuario Menu", route: "/(tabs)/usuario_menu" },
        { label: "Seleccion Destino", route: "/(tabs)/usuario_seleccion_destino" },
        { label: "Busqueda Taxi", route: "/(tabs)/usuario_busqueda_taxi" },
        { label: "Conductor Inicio", route: "/(tabs)/conductor_botones_inicio" },
        { label: "Conductor Conectado", route: "/(tabs)/conductor_conectado" },
        { label: "Conductor Menu", route: "/(tabs)/conductor_menu" },
      ].map(({ label, route }) => (
        <TouchableOpacity
          key={route}
          className="bg-blue-500 py-3 px-6 rounded-lg m-2 shadow-lg w-3/4"
          onPress={() => router.push(route)}
        >
          <Text className="text-white text-center text-lg font-semibold">{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default IndexScreen;
