/** @jsx jsx */
import { Container, jsx, Styled, Box, Flex } from 'theme-ui';
import { CloseQuotes, OpenQuotes, Review } from '../elements/TestimonialIcons';

const items = [
  {
    message: `Duis pellentesque hendrerit erat non rhoncus. Fusce non elit in tortor auctor fermentum. Donec tempor diam id leo condimentum hendrerit.`,
    person: `Fulana de Tal, da loja ABC`,
  },
  {
    message: `Aenean pellentesque consequat semper. Pellentesque nec venenatis erat. Phasellus sit amet pretium sem, sit amet malesuada ante. Nam sed risus.`,
    person: `Ciclana, usuária comum`,
  },
  {
    message: `Maecenas odio nisl, suscipit ac libero id, posuere euismod mauris. Suspendisse elementum mauris nec libero sodales, et scelerisque lectus finibus.`,
    person: `Hahaha, nossa comediante`,
  },
];

const Testimonials = () => (
  <Container>
    <Styled.h2 sx={{ display: `flex`, fontSize: [2, 2], m: 0 }}>
      <Review sx={{ mr: 3 }} /> Depoimentos de usuários
    </Styled.h2>
    {items.map(item => (
      <Flex key={item.message.slice(0, 10)} sx={{ mt: 4, display: `flex` }}>
        <OpenQuotes sx={{ mt: 1, mr: 2 }} />
        <Flex sx={{ flexDirection: `column`, flex: 1 }}>
          <span sx={{ mb: 2 }}>
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
