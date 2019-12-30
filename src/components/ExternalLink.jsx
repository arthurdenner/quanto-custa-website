/** @jsx jsx */
import { jsx } from 'theme-ui';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const ExternalLink = ({ children, className, href, ...rest }) => (
  <OutboundLink
    aria-label={rest[`aria-label`]}
    className={className}
    href={href}
    rel="noopener noreferrer"
    sx={{ textDecoration: `underline` }}
    target="_blank"
  >
    {children}
  </OutboundLink>
);

export default ExternalLink;
