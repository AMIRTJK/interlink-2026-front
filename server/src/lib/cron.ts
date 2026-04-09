import cron from "node-cron";
import { getDb } from "../db/index.js";

export const startCronJobs = () => {
  cron.schedule("0 * * * *", async () => {
    try {
      const db = getDb();

      const result = await db.run(
        "DELETE FROM blacklisted_tokens WHERE expiresAt <= datetime('now')",
      );

      if (result.changes && result.changes > 0) {
        console.log(
          `[Cron] Очистка базы: удалено ${result.changes} просроченных токенов.`,
        );
      }
    } catch (error) {
      console.error(
        "[Cron] Хатогӣ ҳангоми тоза кардани токенҳо (Ошибка очистки токенов):",
        error,
      );
    }
  });
};
