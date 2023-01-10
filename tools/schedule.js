// 引用套件計算時間、發系統通知信
const { now } = require("./day");
const mailer = require("./mailer");

const CronJob = require("cron").CronJob;
const job = new CronJob(
  // 秒 分 時 日 月 星期
  "0 0 0 * * *",
  async function () {
    const scheduleStartTime = new Date();
    console.log(`new Date() === ${scheduleStartTime} dayjs().format() === ${now}`)
    // 系統信的內文，通知人資察看異狀。
    mailer.cronTest.text = `new Date() === ${scheduleStartTime} dayjs().format() === ${now}`;
    // 發出系統信
    mailer.transporter
      .sendMail(mailer.cronTest)
      .then((info) => {
        console.info({ info });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  null,
  false,
  "Asia/Taipei"
);

// 將排程輸出，讓 app.js 使用。
module.exports = job;
