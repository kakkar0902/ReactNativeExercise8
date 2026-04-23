import { ListItem } from "@rneui/themed";
import { Link } from "expo-router";
import React, { useEffect, useState, } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// here is our URL for SpaceX crew API: https://api.spacexdata.com/v4/crew

type CrewMember = {
  id: string;
  name: string;
  agency: string;
  image: string;
};

export default function Index() {
  // we will load the SpaceX crew information here
  const [crew, setCrew] = useState<CrewMember[]>([]);

  const fetchData = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/crew");
    const data = await response.json();
    setCrew(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView style={styles.scrollView}>
          {
            crew.map((crewMember) => {
              return (
                <ListItem key={crewMember.id}>
                  <ListItem.Content>
                    <ListItem.Title>{crewMember.name}</ListItem.Title>
                    <ListItem.Subtitle>{crewMember.agency}</ListItem.Subtitle>
                  </ListItem.Content>
                  <Link href={{
                    pathname: "/Details",
                    params: {
                      id: crewMember.id,
                      name: crewMember.name,
                      agency: crewMember.agency,
                      image: crewMember.image,
                    },
                  }}>
                  <ListItem.Chevron />
                  </Link>
                </ListItem>
              );
            })
          }
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider >
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
    padding: 24,
  },
});
