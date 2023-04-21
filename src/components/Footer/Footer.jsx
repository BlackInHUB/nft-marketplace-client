import { 
    FoterContainer,
    ContactContainer,
    NavContainer,
    DigestContainer
    } from "./Footer.styled";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
    return (
        <FoterContainer>
            <ContactContainer>
                <Logo />
            </ContactContainer>
            <NavContainer>

            </NavContainer>
            <DigestContainer>
                
            </DigestContainer>
        </FoterContainer>
    )
};
