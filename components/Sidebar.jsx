// components/Sidebar.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Menu, X } from 'lucide-react-native';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        className="absolute top-4 left-4 z-50 bg-black p-2 rounded-full"
      >
        {open ? <X color="white" /> : <Menu color="white" />}
      </TouchableOpacity>

      {/* Sidebar */}
      {open && (
        <View className="absolute top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-40 px-4 py-8">
          <Text className="text-xl font-bold mb-6">Menú Principal</Text>
          {[
            { label: 'Usuarios', path: '/usuarios' },
            { label: 'Vehículos', path: '/vehiculos' },
            { label: 'Viajes', path: '/viajes' },
            { label: 'Pagos', path: '/pagos' },
            { label: 'Tarifa', path: '/tarifa' },
            { label: 'Puntuaciones', path: '/puntuaciones' },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-lg mb-4 text-blue-600 hover:underline"
              onPress={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </View>
      )}
    </>
  );
}
