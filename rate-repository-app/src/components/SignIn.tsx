import { Pressable, TextInput, View, StyleSheet, GestureResponderEvent } from 'react-native';
import Text from './Text';
import { useFormik } from 'formik';
import theme from 'src/theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  inputValidationError: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values: any) => {
  console.log(values);
};

const validationSchema = yup.object().shape({
  username: yup.string().min(3, 'Username must be at least 3 characters long.').required('Username required.'),
  password: yup.string().min(8, 'Password must be at least 8 characters long.').required('Password required.'),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={formik.touched.username ? styles.inputValidationError : styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }} text={formik.errors.username} />
      )}
      <TextInput
        style={formik.touched.password ? styles.inputValidationError : styles.input}
        secureTextEntry
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }} text={formik.errors.password} />
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit as unknown as (e: GestureResponderEvent) => void}>
        <Text text={'Submit'} />
      </Pressable>
    </View>
  );
};

export default SignIn;
