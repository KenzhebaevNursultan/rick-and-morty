import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const Status = styled.p`
  font-size: 14px;
  color: ${({ status }) =>
    status === "Alive" ? "green" : status === "Dead" ? "red" : "gray"};
`;

const CharacterItem = ({ character }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/character/${character.id}`)}>
      <Avatar src={character.image} alt={character.name} />
      <Info>
        <Name>{character.name}</Name>
        <Status status={character.status}>
          {character.status} - {character.species}
        </Status>
      </Info>
    </Card>
  );
};

export default CharacterItem;
