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
      text: "MySQL",
      prefix: "mysql/",
      children: [
      ],
    },
  ],
  "/grpc/": "structure",
  "/k8s/": "structure",
  "/mysql/": "structure",
});

