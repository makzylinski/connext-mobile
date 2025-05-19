import ProfileSwiper from "@/screens/profile-swiper/ProfileSwiper";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ProfileSwiper />
    </View>
  );
}
