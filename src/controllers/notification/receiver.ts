import { RedisClientType } from "redis";

const CHANNEL = "notifications";

export class ReceiverController {
  private client: RedisClientType;

  constructor(client: RedisClientType) {
    this.client = client.duplicate();
    this.client.connect();
  }

  public async startReceiving(): Promise<void> {
    await this.client.subscribe(CHANNEL, (message) => {
      console.log(`Received: ${message}`);
      // Handle the received message, e.g., send it to users via WebSocket or any other method.
    });
    console.log("Subscribed to notifications channel");
  }
}
