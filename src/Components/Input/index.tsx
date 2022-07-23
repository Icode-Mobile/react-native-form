import { TextInputProps } from 'react-native';

import { Container } from './style';

interface InputProps extends TextInputProps {}

export const Input = ({ ...rest }: InputProps) => {
  return <Container {...rest} />;
};
