/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const ExternalLink = ({ children, className, href, ...rest }) => (
  <Styled.a
    aria-label={rest[`aria-label`]}
    className={className}
    href={href}
    rel="noopener noreferrer"
    sx={{ textDecoration: `underline` }}
    target="_blank"
  >
    {children}
  </Styled.a>
);

export default ExternalLink;
