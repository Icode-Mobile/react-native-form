import {
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
} from 'react-native';

import { Form } from '../../Components/Form';

import { Container } from './style';

export default function Login() {
  return (
    <TouchableWithoutFeedback
      style={{
        flex: 1,
        backgroundColor: '#111',
      }}
      onPress={Keyboard.dismiss}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: '#111',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        enabled
      >
        <Container>
          <>
            <Form />
          </>
          <StatusBar
            backgroundColor={'#111'}
            barStyle='light-content'
            translucent
          />
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
