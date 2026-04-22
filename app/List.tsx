import React from "react";
import { StyleSheet, Text, ScrollView, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ListItem } from "@rneui/themed";

export default function List() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView style={styles.scrollView}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>John Doe</ListItem.Title>
              <ListItem.Subtitle>EOD, Example.com</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
 
},
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
