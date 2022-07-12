import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "gRPC", icon: "api", link: "/grpc/" },
  { text: "k8s", icon: "class", link: "/k8s/" },
  { text: "MySQL", icon: "mysql", link: "/mysql/" },
  { text: "杂项", icon: "box", link: "/other/" },
  // "/config/",
]);
