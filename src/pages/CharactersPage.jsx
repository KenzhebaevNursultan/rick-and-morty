import styled from "styled-components";
import CharactersList from "../components/CharactersList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

function Characters() {
  return (
    <Container>
      <SearchBar />
      <FilterBar />
      <CharactersList />
    </Container>
  );
}

export default Characters;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  max-width: 100%;
`;
