/** @jsx jsx */
import {
  Container,
  Flex,
  Header as ThemeHeader,
  jsx,
  useColorMode,
} from 'theme-ui';
import Logo from '../elements/Logo';
import ThemeSwitcher from '../elements/ThemeSwitcher';

const Header = () => {
  const [mode, setMode] = useColorMode();
  const toggleMode = () => setMode(mode === `light` ? `dark` : `light`);

  return (
    <ThemeHeader>
      <Container
        as={Flex}
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexDirection: `row`,
        }}
      >
        <Logo />
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
