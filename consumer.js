const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1", fromBeginning: true });
  consumer.subscribe({ topics: ["rider-updates"] });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(`[${topic}], Part:${partition}`, message.value.toString());
    },
  });
}
init();
