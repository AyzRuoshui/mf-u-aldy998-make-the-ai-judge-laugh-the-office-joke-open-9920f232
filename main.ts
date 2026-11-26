import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// 终稿：回复全部、打印与会议室三重细节，结尾落在为缺席者保留座位。
const joke = "I replied-all that I couldn't attend the meeting; the printer produced a badge for me and the calendar kept my seat warm.";

const text = joke.trim();
const bytes = Buffer.from(text, "utf8");
if (
  text.length === 0 ||
  text.length > 200 ||
  /[\r\n\u0000-\u001F\u007F]/.test(text) ||
  bytes.toString("utf8") !== text
) {
  throw new Error("entry must be 1-200 valid UTF-8 characters on one line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), bytes, { mode: 0o644 });
