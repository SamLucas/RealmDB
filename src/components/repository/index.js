import React from 'react';
import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  ContainerIcons,
  ContainerButtons,
  ButtonIcon,
  IconStar,
  IconFork,
  IconRefresh,
  IconTrash,
  IconWeb,
  IconEyes,
} from './styles';

const repository = ({data, onRefresh, deleteItem}) => (
  <Container>
    <Name>{data.name}</Name>
    <Description>{data.description}</Description>

    <ContainerIcons>
      <Stats>
        <Stat>
          <IconEyes />
          <StatCount>{data.watchers}</StatCount>
        </Stat>
        <Stat>
          <IconStar />
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <IconFork />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
      <ContainerButtons>
        <ButtonIcon onPress={onRefresh}>
          <IconRefresh />
        </ButtonIcon>

        <ButtonIcon onPress={deleteItem}>
          <IconTrash />
        </ButtonIcon>

        <ButtonIcon onPress={() => {}}>
          <IconWeb />
        </ButtonIcon>
      </ContainerButtons>
    </ContainerIcons>
  </Container>
);

export default repository;
