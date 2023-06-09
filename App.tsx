import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Sentry from "@sentry/react-native";
import {dsnLink} from "./dsn_link/dsn_link"
Sentry.init({
  dsn:dsnLink,
  tracesSampleRate: 1.0,
  integrations: [new Sentry.ReactNativeTracing()],
});

function App() {
  const onClickHandler = () => {
    throw new Error("oops!! something bad happened");
  };
  return (
    <View>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, fuga
        at! Sint omnis eum dignissimos rerum eligendi sequi accusantium beatae
        at dolores maiores aspernatur, eius magnam voluptate minima fugit optio.
      </Text>
      <TouchableOpacity onPress={onClickHandler}>
        <Text> Click</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Sentry.wrap(App);
