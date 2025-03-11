import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video } from "expo-av";
import { AntDesign, FontAwesome } from "@expo/vector-icons"; // Import icon

const { width, height } = Dimensions.get("window"); // Ambil ukuran layar HP

const Reals = () => {
  const [likes, setLikes] = useState({});

  const datavidio = [
    {
      id: "1",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      description: "Video kartun lucu tentang petualangan anak kucing!",
    },
    {
      id: "2",
      url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
      description: "Animasi keren tentang robot masa depan!",
    },
  ];

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle like
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView pagingEnabled showsVerticalScrollIndicator={false}>
        {datavidio.map((item) => (
          <View key={item.id} style={{ width, height }}>
            {/* Video */}
            <Video
              source={{ uri: item.url }}
              style={{ width, height }}
              resizeMode="cover"
              shouldPlay
              isLooping
            />

            {/* UI Mirip TikTok */}
            <View
              style={{
                position: "absolute",
                bottom: 50,
                left: 20,
                right: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              {/* Keterangan Video */}
              <View style={{ flex: 1 }}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>@User123</Text>
                <Text style={{ color: "white", fontSize: 14 }}>{item.description}</Text>
              </View>

              {/* Tombol Aksi (Like, Comment, Save) */}
              <View style={{ alignItems: "center", marginRight: 10 }}>
                {/* Tombol Like */}
                <TouchableOpacity onPress={() => toggleLike(item.id)} style={{ marginBottom: 15 }}>
                  <AntDesign
                    name="heart"
                    size={30}
                    color={likes[item.id] ? "red" : "white"} // Warna merah jika Like ditekan
                  />
                </TouchableOpacity>

                {/* Tombol Komentar */}
                <TouchableOpacity style={{ marginBottom: 15 }}>
                  <FontAwesome name="comment" size={30} color="white" />
                </TouchableOpacity>

                {/* Tombol Simpan */}
                <TouchableOpacity>
                  <FontAwesome name="bookmark" size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reals;
