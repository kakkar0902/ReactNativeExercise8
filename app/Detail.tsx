
import { FontAwesome } from "@expo/vector-icons";
import { Button, Card, Text } from "@rneui/themed";
import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const users = [
  {
    name: "brynn",
    avatar: require("../assets/images/icon.png"),
  },
  {
    name: "thot leader",
    avatar: require("../assets/images/icon.png"),
  },
  {
    name: "jsa",
    avatar: require("../assets/images/icon.png"),
  },
  {
    name: "nahaconcepts",
    avatar: require("../assets/images/icon.png"),
  },
  {
    name: "andy vitale",
    avatar: require("../assets/images/icon.png"),
  },
  {
    name: "katy frideson",
    avatar: require("../assets/images/icon.png"),
  },
];

export default function Detail() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Card>
              <Card.Title>CARD WITH DIVIDER</Card.Title>
              <Card.Divider />

              {users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={u.avatar}
                    />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                );
              })}
            </Card>

            <Card containerStyle={{ marginTop: 15 }}>
              <Card.Title>FONTS</Card.Title>
              <Card.Divider />

              <Text style={styles.fonts} h1>
                h1 Heading
              </Text>
              <Text style={styles.fonts} h2>
                h2 Heading
              </Text>
              <Text style={styles.fonts} h3>
                h3 Heading
              </Text>
              <Text style={styles.fonts} h4>
                h4 Heading
              </Text>
              <Text style={styles.fonts}>Normal Text</Text>
            </Card>

            <Card>
              <Card.Title>HELLO WORLD</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0 }}
                source={require("../assets/images/react-logo.png")}
              />

              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
               icon={
                <FontAwesome
                  name="code"
                  size={16}
                  color="#ffffff"
                  style={{ marginRight: 10 }}
                />    
               }
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  scrollView: {
    backgroundColor: "pink",
  },
});