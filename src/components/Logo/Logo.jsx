import { LogoLink, LogoText } from './Logo.styled';

export const Logo = ({ footer }) => {
  return (
    <LogoLink to="/">
      <LogoText footer={footer} />
    </LogoLink>
  );
};
