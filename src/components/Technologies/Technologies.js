import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Стек технологий</SectionTitle>
    <SectionText>
      В первую очередь я ориентируюсь на фронтэнд разработку, используя такие
      языки как JavaScript и TypeScript, а также различные библиотеки и
      фреймворки.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size={'3rem'} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Опыт работы с <br />
            React.js, Redux, Next.js, Vue.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Небольшой опыт работы с <br />
            Node, express, Nest
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>{' '}
    <SectionText>
      <h2>Профессиональные навыки: </h2>
      <ul>
        <li> Программирование на JavaScript (ES6+), TypeScript, Python;</li>
        <li>
          Навыки работы с JavaScript - типы данных, работа с объектами,
          рекурсия, замыкание, стек, прототипы, наследование, обработка ошибок,
          работа с DOM, асинхронный JS, Promise, async/await, сетевые запросы
          (fetch, WebSocket, длинные опросы), генераторы, итераторы, контекст
          (this), Web APIs и т.д.;
        </li>
      </ul>
      <li>Знание языков разметки документов (web-сайтов): HTML, CSS;</li>
      <li>
        Опыт работы с библиотеками (фрейморками) JavaScript: React (React Hooks,
        React-Router, Context), Redux + Redux ToolKits, Next JS, GraphQL Apollo,
        Vue JS, Vuex;
      </li>

      <li>Опыт разработки Single Page Application;</li>
      <li>Английский — B2 — Средне-продвинутый;</li>
      <li>Умение работать с Git;</li>
      <li>Компонентный подход к написанию кода;</li>
      <li>Умение работать с препроцессорами SASS;</li>
      <li>Знание npm и webpack;</li>
      <li>Понимание базовых концепций ООП;</li>
      <li>Понимание алгоритмов и умение их написать;</li>
    </SectionText>
    <SectionDivider colorAlt />
  </Section>
)

export default Technologies
