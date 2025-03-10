import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="usuario_menu" options={{ title: "Usuario Menu" }} />
        <Stack.Screen name="usuario_seleccion_destino" options={{ title: "Seleccion Destino" }} />
        <Stack.Screen name="usuario_busqueda_taxi" options={{ title: "Busqueda Taxi" }} />
        <Stack.Screen name="conductor_botones_inicio" options={{ title: "Conductor Inicio" }} />
        <Stack.Screen name="conductor_conectado" options={{ title: "Conductor Conectado" }} />
        <Stack.Screen name="conductor_menu" options={{ title: "Conductor Menu" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
a