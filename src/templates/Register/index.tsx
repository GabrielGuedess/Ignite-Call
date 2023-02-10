import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react';
import { AxiosError } from 'axios';
import { ArrowRight } from 'phosphor-react';
import { z } from 'zod';

import { api } from 'lib/axios';

import * as S from './styles';

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform(username => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const { query } = useRouter();

  async function handleRegister({ name, username }: RegisterFormData) {
    try {
      await api.post('/users', {
        name,
        username,
      });
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        setError('username', error.response.data.message);
      }
    }
  }

  useEffect(() => {
    if (query.username) {
      setValue('username', String(query.username));
    }
  }, [query?.username, setValue]);

  return (
    <S.Wrapper>
      <S.Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </S.Header>

      <S.Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="username">
          <Text size="sm">Nome de usuário</Text>
          <TextInput
            id="username"
            prefix="ignite.com/"
            placeholder="seu-usuário"
            {...register('username')}
          />

          {errors.username && (
            <S.FormError size="sm">{errors.username.message}</S.FormError>
          )}
        </label>

        <label htmlFor="name">
          <Text size="sm">Nome completo</Text>
          <TextInput id="name" placeholder="Seu nome" {...register('name')} />

          {errors.name && (
            <S.FormError size="sm">{errors.name.message}</S.FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};
