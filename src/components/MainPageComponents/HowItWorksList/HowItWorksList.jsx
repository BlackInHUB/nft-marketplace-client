import { List } from './HowItWorksList.styled';
import setup from '../../../images/setup.png';
import create from '../../../images/create.png';
import earning from '../../../images/earning.png';
import { HowItWorksListItem } from './HowItWorksListItem';

const listItems = [
  {
    title: 'Setup Your wallet',
    description:
      'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    image: setup,
  },
  {
    title: 'Create Collection',
    description:
      'Upload your work and setup your collection. Add a description, social links and floor price.',
    image: create,
  },
  {
    title: 'Start Earning',
    description:
      'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    image: earning,
  },
];

export const HowItWorksList = () => {
  return (
    <List>
      {listItems.map((item, i) => (
        <HowItWorksListItem key={i} item={item} i={i} />
      ))}
    </List>
  );
};
