import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Добро пожаловать! <br />
        Мое Портфолио
      </SectionTitle>
      <SectionText>
        Здесь собрана информация о моих навыках, стеке технологий и
        разработанных мной проектах
      </SectionText>
      <Button
        onClick={() => (window.location = 'https://github.com/robertd2000')}
      >
        Подробнее
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
