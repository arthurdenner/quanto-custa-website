/** @jsx jsx */
import {
  Container,
  Flex,
  Header as ThemeHeader,
  jsx,
  useColorMode,
} from 'theme-ui';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [mode, setMode] = useColorMode();
  const toggleMode = () => setMode(mode === `light` ? `dark` : `light`);

  return (
    <ThemeHeader sx={{ display: `block` }}>
      <Container
        as={Flex}
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexDirection: `row`,
          pt: [4, 4, 5],
          pb: [4, 4, 5],
        }}
      >
        <Logo id="header" />
        <button
          onClick={toggleMode}
          sx={{
            borderRadius: `full`,
            p: 1,
            variant: `buttons.transparent`,
          }}
          title="Alterar modo"
          type="button"
        >
          <ThemeSwitcher />
        </button>
      </Container>
    </ThemeHeader>
  );
};

export default Header;
