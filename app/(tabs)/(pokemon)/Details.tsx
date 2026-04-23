
import { Card, Text } from "@rneui/themed";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Details() {

  // get the info passed to us from Index page
  const params = useLocalSearchParams();
  const crewMemberID = params.id;
  const crewMemberName = params.name;
  const crewMemberAgency = params.agency;
  const crewMemberImage = params.image;


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.container}>
          <Card>
            <Card.Title>{crewMemberName}</Card.Title>
            <Card.Divider />
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{
                uri: Array.isArray(crewMemberImage)
                  ? crewMemberImage[0]
                  : crewMemberImage,
              }}
            />
            <Text style={styles.fonts}>
              Agency: {crewMemberAgency}
            </Text>
            <Text style={styles.fonts}>
              ID: {crewMemberID}
            </Text>
          </Card>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 10,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  scrollView: {
    backgroundColor: "pink",
  },
});