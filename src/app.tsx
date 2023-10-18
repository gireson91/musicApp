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
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10em;
  `;

  const StyledStave = styled.img`
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50em;
  `;

  const StyledNote = styled.img.attrs((props) => ({
    $note: props.$note,
    $rotate: props.$rotate,
  })) <{ $note?: string }>`
    position: absolute;
    top: ${(props) => props.note};
    transform: rotate(${(props) => props.rotate});
    height: 12em;
  `;

  // all top position values for the note to be placed on the stave from Low E to High F respectively
  let notes: string[] = [
    "34.8em",
    "33.2em",
    "32em",
    "30.5em",
    "38.3em",
    "37em",
    "35.7em",
    "34.3em",
    "33em",
  ];

  let [count, setCount] = useState(0);

  function nextNote() {
    if (count < notes.length - 1) {
      return setCount(count + 1);
    } else {
      return setCount(0);
    }
  }

  function noteRotate() {
    if (count < 4) {
      return "0deg";
    } else {
      return "180deg";
    }
  }

  return (
    <Wrapper>
      <div>
        <StyledStave src={stave} />
        <StyledNote note={notes[count]} rotate={noteRotate()} src={crotchet} />{" "}
      </div>
      <div>
        <Button onClick={() => nextNote()}>Next Note</Button>
      </div>
    </Wrapper>
  );
}
