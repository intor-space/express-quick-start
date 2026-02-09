import express from "express";
import { createIntorHandler, getTranslator } from "intor/express";
import { intorConfig } from "./intor-config";

const app = express();

app.use(createIntorHandler(intorConfig));

app.get("/", async function (req, res) {
  const { t, tRich } = await getTranslator(intorConfig, req);

  res.send({
    hello: t("hello", { name: "Intor" }),
    rich: tRich("rich", { tag: (children) => `<b>${children}</b>` }),
  });
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
