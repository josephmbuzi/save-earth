import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddPost() {
  const [selectedType, setSelectedType] = useState("nature");

  const carbonTypes = [
    { id: "nature", label: "Nature-based", icon: "leaf" },
    { id: "renewable", label: "Renewable Energy", icon: "flash" },
    { id: "technology", label: "Technology", icon: "hardware-chip" },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-6 border-b border-gray-200">
        <Text className="text-gray-900 text-2xl font-bold">Add Carbon Unit</Text>
      </View>

      <ScrollView className="flex-1">
        <View className="p-6">
          {/* Type Selection */}
          <View className="mb-6">
            <Text className="text-gray-900 font-semibold mb-3">
              Carbon Unit Type
            </Text>
            <View className="flex-row flex-wrap gap-3">
              {carbonTypes.map((type) => (
                <TouchableOpacity
                  key={type.id}
                  onPress={() => setSelectedType(type.id)}
                  className={`flex-row items-center px-4 py-3 rounded-xl ${
                    selectedType === type.id
                      ? "bg-green-500"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <Ionicons
                    name={type.icon as any}
                    size={20}
                    color={selectedType === type.id ? "#ffffff" : "#6b7280"}
                  />
                  <Text
                    className={`ml-2 font-semibold ${
                      selectedType === type.id ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {type.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Location Input */}
          <View className="mb-6">
            <Text className="text-gray-900 font-semibold mb-3">Location</Text>
            <View className="bg-white rounded-xl px-4 py-3 border border-gray-200">
              <TextInput
                placeholder="Enter location"
                className="text-gray-900 text-base"
                placeholderTextColor="#9ca3af"
              />
            </View>
          </View>

          {/* Amount Input */}
          <View className="mb-6">
            <Text className="text-gray-900 font-semibold mb-3">
              Carbon Units
            </Text>
            <View className="bg-white rounded-xl px-4 py-3 border border-gray-200">
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                className="text-gray-900 text-base"
                placeholderTextColor="#9ca3af"
              />
            </View>
          </View>

          {/* Description */}
          <View className="mb-6">
            <Text className="text-gray-900 font-semibold mb-3">
              Description (Optional)
            </Text>
            <View className="bg-white rounded-xl px-4 py-3 border border-gray-200">
              <TextInput
                placeholder="Add details about this carbon unit"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                className="text-gray-900 text-base"
                placeholderTextColor="#9ca3af"
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity className="bg-green-500 rounded-xl py-4 items-center shadow-sm">
            <Text className="text-white font-bold text-lg">
              Add Carbon Unit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}