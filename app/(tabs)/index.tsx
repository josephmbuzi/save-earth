import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

function Avatar() {
  return (
    <View className="bg-green-600 w-14 h-14 rounded-full items-center justify-center">
      <Text className="text-white font-bold">JM</Text>
    </View>
  );
}

export default function Home() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className=" flex flex-row justify-between items-center pt-16 pb-6 px-6">
        <View className="flex flex-row gap-2 items-start">
            <Avatar />
            <View className="flex gap-1 items-start">
                <Text className="text-gray-800 text-md font-medium">Hi, Joseph Mbuzi</Text>
                <View className="flex flex-row items-center gap-1 bg-green-200 px-3 py-0.5 rounded-full">
                    <FontAwesome name="check-circle" size={14} color="#10b981" />
                    <Text className="text-green-700 text-md font-medium">Verified</Text>
                </View>
            
            </View>
        </View>
        <Ionicons name="notifications-outline" size={26} color="#4b5563" />
      </View>

      {/* Content */}
      <ScrollView className="flex-1">
        {/* Stats Card */}
        <View className="mx-6 mt-6 bg-white rounded-2xl p-6 shadow-sm">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-gray-500 text-sm">Total carbon units</Text>
              <Text className="text-4xl font-bold text-gray-900 mt-1">80</Text>
              <Text className="text-green-500 text-sm mt-1">
                +2 this month
              </Text>
            </View>
            <View className="bg-green-100 w-16 h-16 rounded-full items-center justify-center">
              <Ionicons name="leaf" size={32} color="#10b981" />
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="mx-6 mt-6 mb-6">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Recent Activity
          </Text>

          {/* Activity Item 1 */}
          <View className="bg-white rounded-xl p-4 mb-3 shadow-sm">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <View className="flex-row items-center">
                  <Ionicons name="leaf-outline" size={20} color="#10b981" />
                  <Text className="text-gray-900 font-semibold ml-2">
                    Nature-based
                  </Text>
                </View>
                <Text className="text-gray-500 text-sm mt-1">
                  1 Feb 2025, 08:47 AM
                </Text>
              </View>
              <View className="bg-green-100 px-3 py-1 rounded-full">
                <Text className="text-green-600 text-xs font-semibold">
                  Approved
                </Text>
              </View>
            </View>
          </View>

          {/* Activity Item 2 */}
          <View className="bg-white rounded-xl p-4 mb-3 shadow-sm">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <View className="flex-row items-center">
                  <Ionicons name="flash-outline" size={20} color="#f59e0b" />
                  <Text className="text-gray-900 font-semibold ml-2">
                    Renewable Energy
                  </Text>
                </View>
                <Text className="text-gray-500 text-sm mt-1">
                  1 Feb 2025, 08:47 AM
                </Text>
              </View>
              <View className="bg-amber-100 px-3 py-1 rounded-full">
                <Text className="text-amber-600 text-xs font-semibold">
                  Pending
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}