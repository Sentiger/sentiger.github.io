import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "不完全记忆",
  description: "bolg，k8s，go，grpc",

  base: "/",

  theme,
});
