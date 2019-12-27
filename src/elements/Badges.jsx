/**@jsx jsx */
import { Box, jsx, Styled } from 'theme-ui';
import appStoreBadge from '../images/app_store_badge.png';
import playStoreBadge from '../images/play_store_badge.png';

const PlayStoreBadge = () => (
  <Styled.a href="/" target="_blank" sx={{ height: `40px` }}>
    <Styled.img
      aria-label="Link para download do aplicativo na Play Store"
      src={playStoreBadge}
      sx={{ maxWidth: [`100%`, `135px`] }}
    />
  </Styled.a>
);

const AppStoreBadge = () => (
  <Styled.a href="/" target="_blank" sx={{ height: `40px`, ml: [null, 3] }}>
    <Styled.img
      aria-label="Link para download do aplicativo na App Store"
      src={appStoreBadge}
      sx={{ maxWidth: [`100%`, `135px`] }}
    />
  </Styled.a>
);

const Badges = () => (
  <Box
    sx={{
      display: [`grid`, `flex`],
      gridGap: 3,
      gridTemplateColumns: `1fr 1fr`,
    }}
  >
    <PlayStoreBadge />
    <AppStoreBadge />
  </Box>
);

export default Badges;
