import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const menuItems = [
    { icon: "person-outline", label: "Edit Profile", color: "#10b981" },
    { icon: "leaf-outline", label: "My Carbon Units", color: "#10b981" },
    { icon: "stats-chart-outline", label: "Statistics", color: "#3b82f6" },
    { icon: "settings-outline", label: "Settings", color: "#6b7280" },
    { icon: "help-circle-outline", label: "Help & Support", color: "#8b5cf6" },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-green-500 pt-12 pb-8 px-6">
        <View className="items-center">
          <View className="w-24 h-24 bg-white rounded-full items-center justify-center mb-3">
            <Ionicons name="person" size={48} color="#10b981" />
          </View>
          <Text className="text-white text-2xl font-bold">John Doe</Text>
          <View className="flex-row items-center mt-2">
            <View className="bg-white/20 px-3 py-1 rounded-full">
              <Text className="text-white text-sm font-semibold">Verified</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Stats Cards */}
        <View className="flex-row mx-6 -mt-6 gap-3 mb-6">
          <View className="flex-1 bg-white rounded-xl p-4 shadow-sm">
            <Text className="text-gray-500 text-xs">Total Units</Text>
            <Text className="text-gray-900 text-2xl font-bold mt-1">80</Text>
          </View>
          <View className="flex-1 bg-white rounded-xl p-4 shadow-sm">
            <Text className="text-gray-500 text-xs">This Month</Text>
            <Text className="text-green-500 text-2xl font-bold mt-1">+2</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View className="mx-6 bg-white rounded-2xl shadow-sm overflow-hidden">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className={`flex-row items-center px-4 py-4 ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <View
                className="w-10 h-10 rounded-full items-center justify-center"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <Ionicons name={item.icon as any} size={22} color={item.color} />
              </View>
              <Text className="flex-1 ml-3 text-gray-900 font-medium">
                {item.label}
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity className="mx-6 mt-6 mb-8 bg-red-50 rounded-xl py-4 items-center border border-red-200">
          <View className="flex-row items-center">
            <Ionicons name="log-out-outline" size={20} color="#ef4444" />
            <Text className="text-red-500 font-bold text-base ml-2">
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}