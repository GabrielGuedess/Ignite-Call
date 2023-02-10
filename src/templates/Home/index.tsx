import Image from 'next/image';

import { Heading, Text } from '@ignite-ui/react';

import { ClaimUsernameForm } from 'components/molecules/ClaimUsernameForm';

import * as S from './styles';

export const Home = () => (
  <S.Wrapper>
    <S.Hero>
      <Heading as="h1" size="4xl">
        Agendamento descomplicado
      </Heading>
      <Text size="xl">
        Conecte seu calendário e permita que as pessoas marquem agendamentos no
        seu tempo livre.
      </Text>

      <ClaimUsernameForm />
    </S.Hero>

    <S.Preview>
      <Image
        src="/img/app-preview.png"
        alt="App Preview"
        priority
        quality={100}
        width={827}
        height={442}
      />
    </S.Preview>
  </S.Wrapper>
);
