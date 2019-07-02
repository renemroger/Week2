let time = 500;
for (const s of ['\r|   ', '\r/   ', '\r/   ', '\r-   ']) {
  setTimeout(() => {
    process.stdout.write(s);
  }, time += 300)
}