import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "生活记录篇",
  description: "bolg，k8s，go，grpc",

  base: "/",

  theme,
});
