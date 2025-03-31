import { useState } from "react";
import Switcher from "./UI/Switcher";
import styled from "styled-components";

const GERNDER_OPTIONS = [
  { label: "female", value: "female" },
  { label: "male", value: "male" },
  { label: "genderless", value: "genderless" },
  { label: "unknown", value: "unknown" },
];

const STATUS_OPTIONS = [
  { label: "alive", value: "alive" },
  { label: "dead ", value: "dead " },
  { label: "unknown", value: "unknown" },
];

function FilterBar() {
  const [genderValue, setGenderValue] = useState("");
  const [statusValue, setStatusValue] = useState("");

  function genderValueHandler(gender) {
    setGenderValue(gender);
  }
  function statusValueHandler(status) {
    setStatusValue(status);
  }
  return (
    <Container>
      <div>
        <h3>Filter by gender:</h3>
        <div>
          <Switcher
            options={GERNDER_OPTIONS}
            name="gender"
            onChange={genderValueHandler}
            selectedValue={genderValue}
          />
        </div>
      </div>
      <div>
        <h3>Filter by status:</h3>
        <div>
          <Switcher
            options={STATUS_OPTIONS}
            name="status"
            onChange={statusValueHandler}
            selectedValue={statusValue}
          />
        </div>
      </div>
    </Container>
  );
}
export default FilterBar;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
`;
