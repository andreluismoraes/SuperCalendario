import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import Agenda from "./src/Agenda";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Agenda />
    </View>
  );
}
