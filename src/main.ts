import { Client } from "@typeit/discord";
import { config } from "dotenv";
import conf from "./config";

export class Main {
  private static _client: Client;

  public static get client() {
    return this._client;
  }

  public static start() {
    config();
    this._client = new Client({
      classes: [`${__dirname}/DiscordApp.js`],
      silent: false,
      variablesChar: ":",
    });
    this._client.login(conf.discordToken!);
  }
}

Main.start();
