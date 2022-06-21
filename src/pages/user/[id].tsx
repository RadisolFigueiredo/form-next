import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import api from '../../services/api';

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

import Image from 'next/image';
import backgroundFeedback from '../../../public/backgroundFeedback.png';
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

const User = () => {
  const [user, setUser] = useState<Inputs>();

  const router = useRouter();

  const userId = router.query.id;

  useEffect(() => {
    api
      .get(`user/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const firstLetter = (word: string) => {
    return word.substring(0, 1).toUpperCase();
  };

  const formatDate = (date: Date) => {
    return moment(date).format('LL');
  };

  return (
    <S.Container>
      <Image
        alt='background'
        src={backgroundFeedback}
        layout='intrinsic'
        objectFit='fill'
        quality={100}
      />
      <S.Box>
        {!!user ? (
          <>
            <S.Avatar>
              <S.InitialLetters>
                {firstLetter(user?.firstName)} {firstLetter(user?.lastName)}
              </S.InitialLetters>
            </S.Avatar>
            <S.Title>
              Bem vindo(a) {user?.firstName} {user?.lastName}
            </S.Title>
            <RectangleDivisor />

            <S.Birth>
              Você nasceu no dia {formatDate(user?.dateOfBirthday)}.
            </S.Birth>
          </>
        ) : (
          <h1 style={{ color: '#ffffff' }}>Seja Bem-Vindo(a)</h1>
        )}
      </S.Box>
    </S.Container>
  );
};

export default User;
