import { useState } from "preact/hooks";
import stave from "./assets/stave.svg";
import crotchet from "./assets/crotchet.svg";
import "./app.css";
import styled from "styled-components";

export function App() {
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const Button = styled.button`
    position: absolute;
    top: 40em;
    left: 36em;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
  `;

  const StyledStave = styled.img`
    position: relative;
    height: 50em;
    width: 50em;
  `;

  const StyledNote = styled.img.attrs((props) => ({
    $note: props.$note,
  }))<{ $note?: string }>`
    position: absolute;
    left: 35em;
    top: ${(props) => props.$note};
    height: 12em;
  `;

  // all top position values for the note to be placed on the stave from Low E to High F respectively
  let notes: string[] = [
    "26em",
    "24.7em",
    "23.2em",
    "21.9em",
    "20.5em",
    "19.1em",
    "17.8em",
    "16.4em",
    "15em",
  ];

  let [count, setCount] = useState(0);

  function nextNote() {
    if (count < notes.length - 1) {
      return setCount(count + 1);
    } else {
      return setCount(0);
    }
  }
  return (
    <Wrapper>
      <StyledStave src={stave} />
      <StyledNote $note={notes[count]} src={crotchet} />{" "}
      <Button onClick={() => nextNote()}>Next Note</Button>
    </Wrapper>
  );
}
