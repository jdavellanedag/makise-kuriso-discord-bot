import {
  Client,
  On,
  ArgsOf,
  Discord,
  CommandNotFound,
  CommandMessage,
  Command,
} from "@typeit/discord";
import * as Path from "path";

@Discord("kuriso ")
export abstract class DiscordApp {
  @On("ready")
  private ready([]: ArgsOf<"ready">, client: Client) {
    console.log("Bot started");
  }

  @Command("saludame")
  private hello(message: CommandMessage) {
    message.reply("Hola oni-chan 😄");
  }

  @CommandNotFound()
  private notFound(message: CommandMessage) {
    message.reply(
      "Lo siento, no puedo entenderte, puede ser que Zadock no ha hecho su trabajo 😪 , dale un golpe de mi parte"
    );
  }
}
