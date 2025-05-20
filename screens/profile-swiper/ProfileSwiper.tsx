import SwipeableCard from "@/components/swiper/Swiper";
import { useState } from "react";
import { View } from "react-native";

const profiles = [
  { id: 1, name: "Julia" },
  { id: 2, name: "Maks" },
  { id: 3, name: "Ania" },
];

export default function ProfileSwiper() {
  const [cards, setCards] = useState(profiles);

  const removeTopCard = () => {
    setCards((prev) => prev.slice(1));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {cards
        .slice(0)
        .reverse()
        .map((profile) => (
          <SwipeableCard
            key={profile.id}
            profile={profile}
            onSwipeLeft={(p) => {
              console.log("Swipe left:", p.name);
              removeTopCard();
            }}
            onSwipeRight={(p) => {
              console.log("Swipe right:", p.name);
              removeTopCard();
            }}
          />
        ))}
    </View>
  );
}
