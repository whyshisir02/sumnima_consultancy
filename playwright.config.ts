import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  use: { baseURL: "http://127.0.0.1:3100", channel: "chrome", headless: true },
  webServer: {
    command: "node scripts/preview.mjs",
    url: "http://127.0.0.1:3100/en/",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  reporter: "list",
});
