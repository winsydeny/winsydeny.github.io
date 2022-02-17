import { marked } from "marked";
// const md = fs.readFileSync("./test.md", "utf-8");
// marked.setOptions({
//   renderer: new marked.Renderer(),
//   headerIds: false,
// });
const renderer = {
  // heading(text, level) {
  //   // console.log(text, level);
  //   return `<h1>${text}</h1>`;
  // },
  // list(body, order, start) {
  //   // console.log(body, order, start);
  //   return body;
  // },
};
marked.use({ renderer });

// const html = marked.parse("### 测试一下\r\n\r\n- 1\r\n- 2\r\n- 3\r\n- 4\r\n");
// console.log(html);
export function markedParse(text: string): string {
  return marked.parse(text);
}
