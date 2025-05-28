import { ListItem, ListItemImg, TextWrapper, Title, Description } from './HowItWorksList.styled';
import { useInView } from 'react-intersection-observer';

export const HowItWorksListItem = ({ item, i }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { title, description, image } = item;

  return (
    item && (
      <ListItem ref={ref} show={inView} index={i}>
        <ListItemImg src={image} />
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrapper>
      </ListItem>
    )
  );
};
