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
  ],
  "/grpc/": "structure",
});

