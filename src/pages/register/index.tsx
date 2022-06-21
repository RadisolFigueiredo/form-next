import { useForm, SubmitHandler } from 'react-hook-form';

import api from '../../services/api';

import { useRouter } from 'next/router';

import Image from 'next/image';
import image from '../../../public/image.png';
import RectangleDivisor from '../../components/rectangleDivisor';

import * as S from './styles';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirthday: Date;
  password: string;
  country: string;
  bio: string;
  receiveNotifications: boolean;
};

const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirthday: undefined,
      password: '',
      country: '',
      bio: '',
      receiveNotifications: false,
    },
  });

  const registerUser: SubmitHandler<Inputs> = (values) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      dateOfBirthday: new Date(values.dateOfBirthday),
      password: values.password,
      country: values.country,
      bio: values.bio,
      receiveNotifications: values.receiveNotifications,
    };

    api.post('user', data).then((response) => {
      const userId = response.data.id;
      reset();
      router.push(`/user/${userId}`);
    });
  };

  return (
    <S.Container>
      <S.BoxColumns>
        <S.FirstColumn>
          <S.BoxRegister>
            <S.BoxForm>
              <S.Title>Cadastre-se</S.Title>
              <S.SubTitle>Para começar, insira os dados abaixo:</S.SubTitle>
              <S.Form onSubmit={handleSubmit(registerUser)}>
                <S.Input
                  error={!!errors.firstName}
                  {...register('firstName', { required: true })}
                  type='text'
                  placeholder='Nome'
                />
                <S.Span>{errors.firstName && 'Nome Inválido'}</S.Span>
                <S.Input
                  error={!!errors.lastName}
                  {...register('lastName', { required: true })}
                  type='text'
                  placeholder='Sobrenome'
                />
                <S.Span>{errors.lastName && 'Sobrenome Inválido'}</S.Span>

                <S.Input
                  error={!!errors.email}
                  {...register('email', { required: true })}
                  type='email'
                  placeholder='E-mail'
                />
                <S.Span>{errors.email && 'E-mail Inválido'}</S.Span>

                <S.Input
                  error={!!errors.dateOfBirthday}
                  {...register('dateOfBirthday', {
                    required: true,
                  })}
                  type='date'
                  placeholder='Data de nascimento'
                />
                <S.Span>
                  {errors.dateOfBirthday && 'Data de nascimento Inválida'}
                </S.Span>

                <S.Input
                  error={!!errors.password}
                  type='password'
                  placeholder='Senha'
                  {...register('password', {
                    required: true,
                    minLength: 6,
                  })}
                />

                <S.Span>
                  {errors.password?.type === 'required' && 'Senha Inválida'}
                  {errors.password?.type === 'minLength' &&
                    'Senha precisa ter no mínimo 6 caracteres'}
                </S.Span>

                <S.Select
                  error={!!errors.country}
                  {...register('country', { required: true })}
                >
                  <option value=''>Selecione seu país</option>
                  <option value='brasil'>Brasil</option>
                  <option value='estados unidos'>Estados Unidos</option>
                  <option value='inglaterra'>Inglaterra</option>
                </S.Select>
                <S.Span>{errors.country && 'Campo Obrigatório'}</S.Span>
                <S.Input
                  error={!!errors.bio}
                  height='92px'
                  type='textarea'
                  placeholder='Bio'
                  {...register('bio', { required: true })}
                />
                <S.Span>{errors.bio && 'Campo Obrigatório'}</S.Span>
                <S.Button enabled={isValid}>Cadastrar</S.Button>
                <S.BoxCheckbox>
                  <S.InputCheckbox
                    error={!!errors.receiveNotifications}
                    type='checkbox'
                    {...register('receiveNotifications')}
                  />
                  <S.ReceiveNotification>
                    Desejo receber notificações
                  </S.ReceiveNotification>
                </S.BoxCheckbox>
              </S.Form>
            </S.BoxForm>
          </S.BoxRegister>
        </S.FirstColumn>
        <S.SecondColumn>
          <S.BoxImage>
            <Image
              alt='image'
              src={image}
              layout='intrinsic'
              objectFit='contain'
              quality={100}
            />
          </S.BoxImage>
          <S.BoxText>
            <S.TitleSecondColumn>Teste técnico</S.TitleSecondColumn>
            <RectangleDivisor />
            <S.SubTitleSecondColumn>
              Controle suas contas nacionais e internacionais em um único lugar!
            </S.SubTitleSecondColumn>
          </S.BoxText>
        </S.SecondColumn>
      </S.BoxColumns>
    </S.Container>
  );
};

export default Register;
