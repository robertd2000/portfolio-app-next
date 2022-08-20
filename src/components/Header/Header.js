import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href={'/'}>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size={'3rem'} /> <Span>Портфолио</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={'#projects'}>
          <NavLink>Проекты</NavLink>
        </Link>
      </li>
      <li>
        <Link href={'#tech'}>
          <NavLink>Технологии</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Обо мне</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/robertd2000?tab=repositories">
        <AiFillGithub size={'3rem'} />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
