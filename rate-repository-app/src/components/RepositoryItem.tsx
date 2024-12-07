import { View, Text, StyleSheet, Image } from 'react-native';
import theme from 'src/theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
  },
  icon: {
    width: 40,
    height: 40,
  },
  top: {
    flexDirection: 'row',
    gap: 20,
  },
  topRight: {
    paddingRight: 60,
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 2,
  },
  repoNames: {
    fontSize: 14,
    fontWeight: '700',
  },
});

const RepositoryItem = ({ props }: { props: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.icon} source={{ uri: props.ownerAvatarUrl }} />
        <View style={styles.topRight}>
          <Text style={styles.repoNames}>{props.fullName}</Text>
          <Text>{props.description}</Text>
        </View>
      </View>
      <View style={styles.middle}>
        <Tag text={props.language} />
      </View>
      <View style={styles.bottom}>
        <Statistics caption="Stars" statistics={props.stargazersCount} />
        <Statistics caption="Forks" statistics={props.forksCount} />
        <Statistics caption="Reviews" statistics={props.reviewCount} />
        <Statistics caption="Rating" statistics={props.reviewCount} />
      </View>
    </View>
  );
};

export default RepositoryItem;

const Statistics = ({ caption, statistics }: { caption: string; statistics: number }) => {
  const formatStatistics = `${
    statistics % 1000 === 0 ? (statistics / 1000).toFixed(0) : (statistics / 1000).toFixed(2)
  }k`;

  const styles = StyleSheet.create({
    container: {
      gap: 5,
    },
    statistics: {
      fontWeight: '700',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.statistics}>{formatStatistics}</Text>
      <Text>{caption}</Text>
    </View>
  );
};

const Tag = ({ text }: { text: string }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 3,
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
