import { View, Text } from "react-native";

const RepositoryItem = ({ props }) => {
  return (
    <View>
      <Text>Name: {props.fullName}</Text>
      <Text>Description: {props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Forks: {props.forksCount}</Text>
      <Text>Stars: {props.stargazersCount}</Text>
      <Text>Rating: {props.ratingAverage}</Text>
      <Text>Reviews: {props.reviewCount}</Text>
      <Text>Rating: {props.reviewCount}</Text>
    </View>
  );
};

export default RepositoryItem;
