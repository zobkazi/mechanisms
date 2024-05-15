import { RedisClientType } from "redis";

const CHANNEL = "notifications";

export class SenderController {
  static getInstance() {
    throw new Error("Method not implemented.");
  }
  private client: RedisClientType;

  constructor(client: RedisClientType) {
    this.client = client;
  }

  public async sendNotification(message: string): Promise<void> {
    await this.client.publish(CHANNEL, message);
    console.log(`Sent: ${message}`);
  }
}
