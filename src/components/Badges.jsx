/**@jsx jsx */
import { Box, jsx, Styled } from 'theme-ui';
import appStoreBadge from '../images/app_store_badge.png';
import playStoreBadge from '../images/play_store_badge.png';
import ExternalLink from './ExternalLink';

const appStoreLink = `https://apps.apple.com/us/app/quanto-custa-alagoas/id1494023734?ls=1`;
const playStoreLink = `https://play.google.com/store/apps/details?id=com.arthurdenner.quanto_custa`;

const PlayStoreBadge = () => (
  <ExternalLink href={playStoreLink} sx={{ height: `40px` }}>
    <Styled.img
      aria-label="Link para download do aplicativo na Play Store"
      src={playStoreBadge}
      sx={{ maxWidth: [`100%`, `135px`] }}
    />
  </ExternalLink>
);

const AppStoreBadge = () => (
  <ExternalLink href={appStoreLink} sx={{ height: `40px`, ml: [null, 3] }}>
    <Styled.img
      aria-label="Link para download do aplicativo na App Store"
      src={appStoreBadge}
      sx={{ maxWidth: [`100%`, `135px`] }}
    />
  </ExternalLink>
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
