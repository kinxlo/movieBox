import { Link } from 'react-router-dom';

import style from './404.module.scss';
import { Container } from '@chakra-ui/react';

const PageNotFound = () => {
  return (
    <Container my={{ base: 0, md: `10rem` }} maxW={`1200px`}>
      <section className={style.error_main}>
        <section className={style.error_main_one}>
          <div>
            <p className={style.error_text_one}>OOOps!</p>
            <p className={style.error_text_two}>Page not found</p>
            <p className={style.error_text_three}>
              This page doesn&apos;t exist, we suggest you go back to home.
            </p>
          </div>
          <Link to="/" className={[style.error_btn].join(' ')}>
            Back to home
          </Link>
        </section>
        <section className={style.error_main_two}>
          <img
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1694889857/family_fishing-rafiki_smfsci.svg`}
            alt="error img"
            className={style.error_img}
          />
        </section>
      </section>
    </Container>
  );
};

export default PageNotFound;
