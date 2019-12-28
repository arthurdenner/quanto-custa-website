/** @jsx jsx */
import { Container, jsx, Styled, Flex } from 'theme-ui';
import { Question } from './icons';
import items from './items';

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
