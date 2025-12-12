import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";

function Avatar() {
  return (
    <View className="bg-jungle-700 w-14 h-14 rounded-full items-center justify-center">
      <Text className="text-white font-bold">JM</Text>
    </View>
  );
}

export default function Home() {
  return (
    <View className="flex-1 bg-surface-900">
      {/* Header */}
      <View className="flex flex-row justify-between items-center pt-16 pb-6 px-6">
  <View className="flex flex-row gap-3 items-center">
    <Avatar />
    <View className="flex gap-1.5 items-start">
      <Text className="text-dark-900 text-lg font-manrope-bold">Hi, Joseph Mbuzi</Text>
      <View className="flex flex-row items-center gap-1.5 bg-jungle-100 px-2.5 py-1 rounded-full">
        <FontAwesome name="check-circle" size={12} color="#10b981" />
        <Text className="text-jungle-700 text-xs font-manrope-semibold">Verified</Text>
      </View>
    </View>
  </View>
  
  <View className="relative">
    <Ionicons name="notifications-outline" size={28} color="#1f2937" />
    {/* Optional: Notification badge */}
    <View className="absolute -top-0.1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
  </View>
</View>

      {/* Content */}
      <ScrollView className="flex-1">
        {/* Stats Card */}
        <View className="mx-6 bg-white rounded-xl py-3 border border-stroke-900">
  <View className="flex-col w-full items-center justify-between px-4">
  <View className="w-full">
    <View className="flex flex-row w-full items-center justify-between mb-2">
      <Text className="text-dark-800 font-manrope-semibold text-md">Minimum Cashout</Text>
      <View className="flex flex-row items-baseline gap-1">
  <Text className="text-jungle-700 font-manrope-bold text-lg">1,000</Text>
  <Text className="text-dark-600 font-manrope-regular text-sm">/</Text>
  <Text className="text-dark-600 font-manrope-regular text-sm">5,000</Text>
  <Text className="text-dark-600 font-manrope-regular text-sm">points</Text>
</View>
    </View>
    
    {/* Progress Bar */}
    <View className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <View className="h-full bg-jungle-700 rounded-full" style={{ width: '80%' }} />
    </View>
  </View>
</View>
  <View className="flex relative h-28 bg-surface-800 mt-2 pb-4 -my-3 flex-row items-end px-4 justify-between w-full border-t border-stroke-900">
    <View>
      <Text className="text-dark-900 font-manrope-bold text-2xl">10,0000</Text>
      <Text className="text-dark-800 font-manrope-semibold text-md">Credit Points</Text>
      <Text className="text-dark-800 font-manrope-semibold text-md">Since 2024</Text>
    </View>
    <Text className="text-white items-center bg-jungle-700 px-3 py-2 rounded-full font-manrope-semibold text-md">Cashout</Text>
  </View>
</View>

<View className="mt-4">
  <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    className="px-6"
    contentContainerStyle={{ gap: 12 }}
  >
    <View className="w-80 h-40 bg-jungle-700 rounded-2xl overflow-hidden">
      <Image
        source={{ uri: 'https://images.pexels.com/photos/33293767/pexels-photo-33293767.jpeg' }} 
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
    
    <View className="w-80 h-40 bg-surface-800 rounded-2xl overflow-hidden">
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/14095652/pexels-photo-14095652.jpeg' }} 
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
    
    <View className="w-80 h-40 bg-jungle-100 rounded-2xl overflow-hidden">
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/26736699/pexels-photo-26736699.jpeg' }} 
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  </ScrollView>
  
  {/* Optional: Pagination dots */}
  <View className="flex flex-row justify-center gap-2 mt-3">
    <View className="w-3 h-2 bg-jungle-700 rounded-full" />
    <View className="w-3 h-2 bg-gray-300 rounded-full" />
    <View className="w-3 h-2 bg-gray-300 rounded-full" />
  </View>
</View>

        {/* Recent Activity */}
        <View className="mx-6 mt-6 mb-6">
          <Text className="text-lg font-manrope-semibold text-gray-900 mb-4">
            Recent Activity
          </Text>

          <View className="bg-white rounded-xl overflow-hidden mb-3 border border-gray-100">
  {/* Post Header - Author Info */}
  <View className="flex-row items-center justify-between p-4 pb-3">
    <View className="flex-row items-center gap-3">
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/33293767/pexels-photo-33293767.jpeg' }}
        className="w-10 h-10 rounded-full"
      />
      <View>
        <Text className="text-dark-900 font-manrope-semibold text-sm">Sarah Johnson</Text>
        <Text className="text-dark-600 font-manrope-regular text-xs">2 hours ago</Text>
      </View>
    </View>
    <Ionicons name="ellipsis-horizontal" size={20} color="#6b7280" />
  </View>

  {/* Post Image */}
  <Image 
    source={{ uri: 'https://images.pexels.com/photos/33293767/pexels-photo-33293767.jpeg' }}
    className="w-full h-64"
    resizeMode="cover"
  />

  {/* Post Caption */}
  <View className="px-4 pt-3 pb-2">
    <Text className="text-dark-800 font-manrope-regular text-sm leading-5">
      Amazing sunset at the beach today! 🌅 Nothing beats the peaceful vibes of nature.
    </Text>
  </View>

  {/* Reactions, Comments, Share */}
  <View className="px-4 pb-3">
    <View className="flex-row items-center justify-between border-t border-gray-100 pt-3">
      {/* Like Button */}
      <View className="flex-row items-center gap-1.5">
        <Ionicons name="heart-outline" size={22} color="#6b7280" />
        <Text className="text-dark-700 font-manrope-medium text-sm">248</Text>
      </View>

      {/* Comment Button */}
      <View className="flex-row items-center gap-1.5">
        <Ionicons name="chatbubble-outline" size={20} color="#6b7280" />
        <Text className="text-dark-700 font-manrope-medium text-sm">32</Text>
      </View>

      {/* Share Button */}
      <View className="flex-row items-center gap-1.5">
        <Ionicons name="paper-plane-outline" size={20} color="#6b7280" />
        <Text className="text-dark-700 font-manrope-medium text-sm">Share</Text>
      </View>
    </View>
  </View>
</View>

        </View>
      </ScrollView>
    </View>
  );
}