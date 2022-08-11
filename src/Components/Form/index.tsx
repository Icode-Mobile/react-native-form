import { useState } from 'react';
import { Alert, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container, Title } from './style';

type InputProps = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email('Digite um email válido')
    .required('Preencha seu email por favor!'),
  password: yup.string().required('Preencha sua senha por favor!'),
});

export const Form = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<InputProps>({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: InputProps) => {
    Alert.alert('Seus dados', `Email: ${data.email}\nSenha: ${data.password}`);
  };

  return (
    <Container>
      <Title> Login </Title>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder='Email'
            placeholderTextColor={'#777'}
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={onChange}
            importantForAutofill='no'
            value={value}
            onBlur={onBlur}
          />
        )}
        name='email'
      />

      {errors.email && (
        <Text style={{ color: 'red' }}> {errors.email.message} </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder='Senha'
            placeholderTextColor={'#777'}
            secureTextEntry
            autoCapitalize={'none'}
            onChangeText={onChange}
            autoCorrect={false}
            importantForAutofill='no'
            value={value}
            onBlur={onBlur}
          />
        )}
        name='password'
      />

      {errors.password && (
        <Text style={{ color: 'red' }}> {errors.password.message} </Text>
      )}

      <Button
        title='Entrar'
        activeOpacity={0.6}
        onPress={handleSubmit(handleLogin)}
        disabled={errors.email || errors.password ? true : false}
        style={{
          backgroundColor: errors.email || errors.password ? '#222' : '#1c59ba',
        }}
      />
    </Container>
  );
};
