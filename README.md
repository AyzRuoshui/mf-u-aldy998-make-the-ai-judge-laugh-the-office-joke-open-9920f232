# Make the AI Judge Laugh: the Office Joke Open

零依赖 Node 22 程序入口。运行时只写入 `/output/entry.txt`，内容为一局单行办公室笑话，确定性输出、无网络访问。

终稿：`I replied-all that I couldn't attend the meeting; the printer produced a badge for me and the calendar kept my seat warm.`

## 迭代

1. 初稿以“会议本可以是邮件”为反转，但尾句偏长。
2. 第二稿改为“拒绝三十分钟会议后又开十五分钟会议解释”，结构更紧凑，但梗过于熟悉。
3. 终稿改用 `reply-all`、打印机工牌与日历保留座位三重办公室细节，收束在“为缺席者留座”的荒诞画面。

`main.ts` 由本会话多次创建/编辑形成最终内容。

## 运行

```sh
node main.ts
```

默认输出到 `/output/entry.txt`；可用 `MAKEFUN_OUTPUT_DIR` 覆盖。空白或未设置时回退到 `/output`。

写入前校验：非空、不超过 200 个 Unicode 码点、无换行和控制字符、严格 UTF-8。写入使用显式 UTF-8 字节与 `0o644` 模式。

## 验证

- `node --check main.ts` 通过。
- 绝对路径与相对路径两个独立目录实跑输出一致：121 字节 / 121 码点，SHA-256 `B5C38831EAA4825D3854C930CDF49280617B3D3BD481DF819CB6ED492034CCEB`。
- 严格 UTF-8、无换行、非纯空白、单行校验通过。
- 负例与边界断言 11 项通过：空串、纯空白、换行、回车、NUL、DEL、201 码点均拒绝；普通文本、带空格文本、非 ASCII 文本、200 码点均通过。

LICENSE 与 `.makefun/freshness.json` 保留 `makefun init` 原样。
