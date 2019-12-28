/** @jsx jsx */
import { Container, jsx, Styled, Flex } from 'theme-ui';
import { Question } from '../elements/FAQIcons';

const items = [
  {
    question: `Por que só funciona em Alagoas?`,
    answer: `O Quanto Custa faz usos de dados da Secretaria da Fazenda - SEFAZ e somente o órgão do Estado de Alagoas fornece esses dados.`,
  },
  {
    question: `Há planos de atender outros estados?`,
    answer: `Se algum outro estado começar a oferecer os dados necessários, sim, pretendemos atender.`,
  },
  {
    question: `Os dados são reais? De quando são?`,
    answer: `Sim, os dados exibidos são reais. A SEFAZ disponibiliza dados dos últimos 3 dias, mas é possível ver dados mais antigos, caso a SEFAZ não tenha dados recentes para sua busca.`,
  },
];

const FAQ = () => (
  <Container>
    <Styled.h2>
      <Question sx={{ mr: 3 }} /> Perguntas frequentes
    </Styled.h2>
    {items.map(item => (
      <Flex key={item.question} sx={{ flexDirection: `column`, mt: 4 }}>
        <span sx={{ mb: 2, fontWeight: `bold` }}>
          <b>―</b> {item.question}
        </span>
        <span>{item.answer}</span>
      </Flex>
    ))}
  </Container>
);

export default FAQ;
