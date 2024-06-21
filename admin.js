const { kafka } = require("./client.js");
//
async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting");
  admin.connect();
  console.log("Admin connection success");
  console.log("Creating topics");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Creation Success : [rider-updates]");
  console.log("Disconnecting Admin");

  await admin.disconnect();
  console.log("Admin Disconnected");
}
init();
