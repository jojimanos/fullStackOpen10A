import { View, StyleSheet, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from 'src/theme';
import { Link } from 'react-router-native';

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
      <ScrollView horizontal>
        <Link to={'/'}>
          <Text color="textSecondary" fontSize="subheading" text="Repositories" />
        </Link>
        <Link to={'signin'}>
          <Text color="textSecondary" fontSize="subheading" text="SignIn" />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
