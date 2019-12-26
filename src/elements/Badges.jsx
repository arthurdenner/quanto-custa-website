/**@jsx jsx */
import { Flex, jsx, Styled } from 'theme-ui';
import appStoreBadge from '../images/app_store_badge.png';
import playStoreBadge from '../images/play_store_badge.png';

const PlayStoreBadge = () => (
  <Styled.a href="/" target="_blank" sx={{ height: `40px` }}>
    <Styled.img
      aria-label="Link para download do aplicativo na Play Store"
      src={playStoreBadge}
      sx={{ height: `40px` }}
    />
  </Styled.a>
);

const AppStoreBadge = () => (
  <Styled.a href="/" target="_blank" sx={{ height: `40px`, ml: 3 }}>
    <Styled.img
      aria-label="Link para download do aplicativo na App Store"
      src={appStoreBadge}
      sx={{ height: `40px` }}
    />
  </Styled.a>
);

const Badges = () => (
  <Flex id="download">
    <PlayStoreBadge />
    <AppStoreBadge />
  </Flex>
);

export default Badges;
