/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui';
import Badges from '../../components/Badges';

const Promote = () => (
  <Box
    sx={{
      backgroundColor: `light`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      p: [4, 4, 5],
    }}
  >
    <Styled.h2
      sx={{
        mt: 0,
        mb: [3, 4, 4],
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
