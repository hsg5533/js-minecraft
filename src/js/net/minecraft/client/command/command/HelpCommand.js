import e from "../Command.js";
import a from "../../render/gui/FontRenderer.js";
export default class o extends e {
  constructor() {
    super("help", "", "Displays a list of commands");
  }
  execute(e, o) {
    return (
      e.addMessageToChat(a.COLOR_PREFIX + "2--- Showing help page ---"),
      e.commandHandler.commands.forEach((a) => {
        e.addMessageToChat(
          "/" + a.command + " " + a.usage + " - " + a.description
        );
      }),
      !0
    );
  }
}
