import { useState } from 'react';
import { Alert } from 'react-native';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container, Title } from './style';

export const Form = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    Alert.alert('Seus dados', `Email: ${email}\nSenha: ${password}`);
  };

  return (
    <Container>
      <Title> Login </Title>
      <Input
        placeholder='Email'
        placeholderTextColor={'#777'}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={(t) => setEmail(t.includes(' ') ? '' : t)}
        importantForAutofill='no'
      />
      <Input
        placeholder='Senha'
        placeholderTextColor={'#777'}
        secureTextEntry
        autoCapitalize={'none'}
        onChangeText={(t) => setPassword(t.includes(' ') ? '' : t)}
        autoCorrect={false}
        importantForAutofill='no'
      />
      <Button
        title='Entrar'
        activeOpacity={0.6}
        onPress={handleLogin}
        disabled={!email || !password}
        style={{ backgroundColor: !email || !password ? '#222' : '#1c59ba' }}
      />
    </Container>
  );
};
