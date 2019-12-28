/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';

const Promote = () => (
  <Link
    to="/#download"
    sx={{
      backgroundColor: `light`,
      display: `block`,
      p: `1.5rem`,
    }}
  >
    <Styled.p
      sx={{
        m: 0,
        lineHeight: `1rem`,
        fontSize: [3, 3],
        fontWeight: `bold`,
        textAlign: `center`,
      }}
    >
      Quero começar a economizar!
    </Styled.p>
  </Link>
);

export default Promote;
