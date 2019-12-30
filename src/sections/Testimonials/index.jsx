/** @jsx jsx */
import { Container, jsx, Styled, Flex } from 'theme-ui';
import { CloseQuotes, OpenQuotes, Review } from './icons';
import items from './items';

const Testimonials = () => (
  <Container>
    <Styled.h2>
      <Review sx={{ mr: 3 }} /> Depoimentos de usuários
    </Styled.h2>
    {items.map(item => (
      <Flex
        key={item.message.slice(0, 10)}
        sx={{ mt: [4, 4, 5], display: `flex` }}
      >
        <OpenQuotes sx={{ mt: 1, mr: 2 }} />
        <Flex sx={{ flexDirection: `column`, flex: 1 }}>
          <span sx={{ mb: 2, fontStyle: `italic` }}>
            {item.message}
            <CloseQuotes sx={{ ml: 2 }} />
          </span>
          <span>
            <b>―</b> {item.person}
          </span>
        </Flex>
      </Flex>
    ))}
  </Container>
);

export default Testimonials;
