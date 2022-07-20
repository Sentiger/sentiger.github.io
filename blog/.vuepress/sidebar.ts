import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
    {
      text: "gRPC",
      prefix: "grpc/",
      children: [
        "get-started/",
        "transport/",
      ],
    },
    {
      text: "k8s",
      prefix: "k8s/",
      children: [
        "配套扩展/",
      ],
    },
    {
      text: "Golang",
      prefix: "go/",
      children: [
        "Golang/",
      ],
    },
    {
      text: "MySQL",
      prefix: "mysql/",
      children: [
      ],
    },
    {
      text: "杂项",
      prefix: "other/",
      children: [
      ],
    },
  ],
  "/grpc/": "structure",
  "/k8s/": "structure",
  "/go/": "structure",
  "/mysql/": "structure",
  "/other/": "structure",
});

