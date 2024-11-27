import { MantineProvider } from "@mantine/core";
import "./App.css";
import DevCard from "./DevCard";

function App() {
  return (
    <MantineProvider>
      <div >
        <DevCard />
      </div>
    </MantineProvider>
  );
}

export default App;
