import "./App.css";
import { ChatEngine } from "react-chat-engine";

const App = () => {
  return (
    <>
      <ChatEngine
        height="100vh"
        userName="MiniTechbot"
        userSecret="123123"
        projectID="3b9758b8-ee0c-4b68-bb50-6beca9b156b5"
      />
    </>
  );
};

export default App;
