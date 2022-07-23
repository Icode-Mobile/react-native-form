import { useState } from 'react';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container, Title } from './style';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type InputProps = {
  email: string;
  password: string;
};

export const Form = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<InputProps>({
    resolver: yupResolver(schema),
  });

  const handleLogin = () => {
    // Alert.alert('Seus dados', `Email: ${email}\nSenha: ${password}`);
    alert('ok');
  };

  return (
    <Container>
      <Title> Login </Title>
      <Input
        placeholder='Email'
        placeholderTextColor={'#777'}
        keyboardType='email-address'
        {...register('email')}
        autoCapitalize={'none'}
      />
      <Input
        placeholder='Senha'
        placeholderTextColor={'#777'}
        secureTextEntry
        {...register('password')}
        autoCapitalize={'none'}
      />
      <Button
        title='Entrar'
        activeOpacity={0.6}
        onPress={handleSubmit(handleLogin)}
        disabled={errors ? true : false}
        style={{ backgroundColor: errors ? '#222' : '#1c59ba' }}
      />
    </Container>
  );
};
