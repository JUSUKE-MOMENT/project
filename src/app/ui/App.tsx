import { PasswordGenerator } from "../../features";
import { Header } from "../../widgets";

function App() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <PasswordGenerator />
      </main>
    </>
  );
}

// Add password-generate-btn

export default App;
