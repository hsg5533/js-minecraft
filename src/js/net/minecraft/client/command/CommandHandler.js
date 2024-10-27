import m from "./command/HelpCommand.js";
import s from "./command/TimeCommand.js";
import e from "./command/TeleportCommand.js";
export default class a {
  constructor(a) {
    (this.minecraft = a),
      (this.commands = []),
      this.commands.push(new m()),
      this.commands.push(new s()),
      this.commands.push(new e());
  }
  handleMessage(m) {
    let s = m.split(" "),
      e = s[0].toLowerCase();
    this.handleCommand(e, s.slice(1));
  }
  handleCommand(m, s) {
    for (let e = 0; e < this.commands.length; e++) {
      let a = this.commands[e];
      if (a.command === m) {
        this.commands[e].execute(this.minecraft, s) ||
          this.minecraft.addMessageToChat("/" + a.command + " " + a.usage);
        return;
      }
    }
    this.minecraft.addMessageToChat('Unknown command! Type "/help" for help.');
  }
}
