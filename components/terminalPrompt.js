import { ReactTerminal } from 'react-terminal';

// const terminalStyle = {
//   minheight: '0px',
//   maxheight: '200px',
// };

function TerminalPrompt() {
  // Define commands here
  const welcomeMessage = (
    <span>
      Hello, I am a Computer Science Student based in The Netherlands!
      <br />
    </span>
  );

  const commands = {
    whoami: 'mugishompozi',
    cd: (directory) => `changed path to ${directory}`,
  };

  return (
    <ReactTerminal
      commands={commands}
      showControlBar={false}
      enableInput={false}
      welcomeMessage={welcomeMessage}
      // theme="dracula"
      themes={{
        'my-custom-theme': {
          themeBGColor: 'black',
          themeToolbarColor: 'black',
          themeColor: '#FFFEFC',
          themePromptColor: '#a917a8',
        },
      }}
      theme="my-custom-theme"
    />
  );
}

export default TerminalPrompt;
