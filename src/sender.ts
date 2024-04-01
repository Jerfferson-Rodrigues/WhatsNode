import { start } from "repl";
import { create, Whatsapp, Message, SocketState } from "venom-bot";

class Sender {
  private client: Whatsapp;

  constructor() {}

  private initialize() {
    const qr = (base64Qrimg: string) => {
      console.log();
    };

    const status = (statusSession: string) => {};

    const start = (client: Whatsapp) => {
      this.client = client;
    };

    create("ws-sender-dev", qr, status)
      .then((client) => start(client))
      .catch((error) => console.error(error));
  }
}

export default Sender;
