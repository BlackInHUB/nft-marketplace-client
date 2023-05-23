import { List, ListItem, ListItemImg, TextWrapper, Title, Description } from "./HowItWorksList.styled";
import setup from '../../../images/setup.png';
import create from '../../../images/create.png';
import earning from '../../../images/earning.png';

export const HowItWorksList = () => {
    return (
        <List>
            <ListItem>
                <ListItemImg src={setup} />
                <TextWrapper>
                    <Title>Setup Your wallet</Title>
                    <Description>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</Description>
                </TextWrapper>
            </ListItem>
            <ListItem>
                <ListItemImg src={create} />
                <TextWrapper>
                    <Title>Create Collection</Title>
                    <Description>Upload your work and setup your collection. Add a description, social links and floor price.</Description>
                </TextWrapper>
            </ListItem>
            <ListItem>
                <ListItemImg src={earning} />
                <TextWrapper>
                    <Title>Start Earning</Title>
                    <Description>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</Description>
                </TextWrapper>
            </ListItem>
        </List>
    )
}