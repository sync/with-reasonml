type css = {. "index": string};
[@bs.module] external css: css = "./index.css";

[@react.component]
let make = () => {
  let table = ToyRobot.Table.make(~width=5, ~length=5);
  let simulator = ToyRobot.Simulator.make(~table);

  let (text, setText) = React.useState(() => "");
  let (result, setResult) = React.useState(() => "");

  React.useEffect1(
    () => {
      let commands = ToyRobot.CLI.loadCommands(text);

      let currentResult =
        switch (ToyRobot.CLI.runCommands(simulator, commands)) {
        | Some(report) => report
        | None => ""
        };
      setResult(_ => currentResult);

      None;
    },
    [|text|],
  );

  <div
    className={
      css##index;
    }> <CommandsArea text setText result /> </div>;
};

let default = make;
