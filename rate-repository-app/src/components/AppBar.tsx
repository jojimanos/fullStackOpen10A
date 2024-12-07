import { View, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from 'src/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 20,
    backgroundColor: theme.colors.appBarBackground,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text color="textSecondary" fontSize="subheading" text="Repositories" />
    </View>
  );
};

export default AppBar;
