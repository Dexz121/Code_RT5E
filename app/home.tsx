import React from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView, useWindowDimensions } from 'react-native';

export default function HomePage() {
  const openPhone = () => Linking.openURL('tel:999999999');
  const openApp = () => console.log('Redirigir a sección de app o login');
  const openDriver = () => console.log('Redirigir a login de conductor');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      {/* Hero */}
      <View className="w-full bg-gray-50 py-12 px-4 items-center">
        <View className="w-full max-w-screen-md">
          <Text className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
            Radio Taxis 5 Estrellas Plus
          </Text>
          <Text className="text-base md:text-lg text-gray-600 text-center mt-2">
            ¡Rápidos, seguros y disponibles 24/7!
          </Text>

          {/* Botones */}
          <View className="w-full mt-8 space-y-4 px-4">
            <TouchableOpacity onPress={openPhone} className="bg-yellow-500 py-4 rounded-xl shadow-md">
              <Text className="text-white text-center text-lg font-semibold">📞 Llamar a un Taxi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openApp} className="bg-green-600 py-4 rounded-xl shadow-md">
              <Text className="text-white text-center text-lg font-semibold">📍 Pedir desde la App</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openDriver} className="bg-blue-600 py-4 rounded-xl shadow-md">
              <Text className="text-white text-center text-lg font-semibold">🧑‍💼 Soy Conductor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Beneficios */}
      <View className="w-full bg-white py-10 px-4">
        <View className="flex flex-row flex-wrap justify-center gap-8 max-w-screen-lg mx-auto">
          {[
            { icon: '⭐', label: 'Servicio 5 estrellas' },
            { icon: '🔒', label: 'Conductores verificados' },
            { icon: '⏰', label: 'Disponibilidad 24/7' },
            { icon: '📍', label: 'Cobertura regional' },
          ].map((item, index) => (
            <View key={index} className="items-center w-36">
              <Text className="text-3xl mb-2">{item.icon}</Text>
              <Text className="text-center text-sm font-medium text-gray-700">{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View className="items-center py-6 px-4 bg-gray-100 space-y-1">
        <Text className="text-sm text-gray-500">📧 contacto@radiotaxis5e.com</Text>
        <Text className="text-sm text-gray-500">Síguenos en redes</Text>
        <Text className="text-xs text-gray-400 mt-2">© 2025 Radio Taxis 5 Estrellas</Text>
      </View>
    </ScrollView>
  );
}
