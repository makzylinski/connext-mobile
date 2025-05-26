import SwipeableCard from "@/components/swiper/Swiper";
import { getUsers } from "@/services/user.service";
import { useEffect, useState } from "react";
import { View } from "react-native";

const profiles = [
  { id: 1, name: "Julia" },
  { id: 2, name: "Maks" },
];

export default function ProfileSwiper() {
  const [cards, setCards] = useState(profiles);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setCards(users);
        console.log("Fetched users:", users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

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
