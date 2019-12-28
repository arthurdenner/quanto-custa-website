/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui';
import Badges from '../elements/Badges';

const Promote = () => (
  <Box
    sx={{
      backgroundColor: `light`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      p: 4,
    }}
  >
    <Styled.h2
      sx={{
        mt: 0,
        mb: 3,
        fontSize: [2, 2, 3],
        fontWeight: `bold`,
        textAlign: `center`,
      }}
    >
      Baixe agora e economize!
    </Styled.h2>
    <Badges />
  </Box>
);

export default Promote;
