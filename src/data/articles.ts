export type MediumArticle = {
  slug: string;
  title: string;
  teaser: string;
  topic: string;
  readTime: string;
  url: string;
};

export const mediumArticles: MediumArticle[] = [
  {
    slug: "node-memory-leaks",
    title: "Detecting Memory Leaks in Node.js Using --inspect",
    teaser:
      "Build a deliberately leaky Express app, inspect process memory, and use Chrome DevTools heap snapshots to find retained objects. Includes a practical tip for debugging Node.js in Kubernetes.",
    topic: "Node.js",
    readTime: "4 min read",
    url: "https://medium.com/@shammad287/%EF%B8%8F-%EF%B8%8F-detecting-memory-leaks-in-node-js-using-inspect-a-hands-on-guide-with-express-js-2288997dd8cf",
  },
  {
    slug: "nestjs-sqs-transport",
    title: "Building a Custom SQS Transport Strategy with NestJS",
    teaser:
      "Connect NestJS microservices to Amazon SQS with a custom transport, including queue polling, message handling, retries, dead-letter routing, and client integration.",
    topic: "NestJS · AWS SQS",
    readTime: "13 min read",
    url: "https://medium.com/@shammad287/building-a-custom-sqs-transport-strategy-with-nestjs-a5c0e58c7603",
  },
  {
    slug: "firebase-functions-github-actions",
    title: "Automate Firebase Functions Deployment with GitHub Actions",
    teaser:
      "Set up a GitHub Actions workflow to deploy Firebase Functions after a merge, using repository secrets and an automated CI pipeline.",
    topic: "Firebase · CI/CD",
    readTime: "5 min read",
    url: "https://medium.com/@shammad287/automate-your-firebase-functions-deployment-with-github-actions-continuous-integration-b61b94d9e1a7",
  },
];
