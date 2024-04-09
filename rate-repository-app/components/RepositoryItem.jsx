import React from "react";
import { View, Text } from "react-native";

const RepositoryItem = ({id, fullName, description, language}) => {
  return (
    <View>
      <Text>
        {id} {fullName} {description} {language}
      </Text>
    </View>
  );
};

export default RepositoryItem;
