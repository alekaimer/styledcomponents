import { Title, TitleSmall } from "./styles";

function App() {
  return (
    <div>
      <Title fontSize={136}>
        Hello word!
        <span>:)</span>
      </Title>
      <TitleSmall>Texto menor</TitleSmall>
    </div>
  );
}

export default App;
