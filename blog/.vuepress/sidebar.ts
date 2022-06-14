import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
    {
      text: "gRPC",
      icon: "creative",
      prefix: "grpc/",
      children: [
        "get-started/",
        "transport/",
      ],
    },
    {
      text: "k8s",
      icon: "creative",
      prefix: "k8s/",
      children: [
        "配套扩展/",
      ],
    },
  ],
  "/grpc/": "structure",
  "/k8s/": "structure",
});

