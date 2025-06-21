export type Item = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  createdAt: string;
};

export const mockItems: Item[] = [
  {
    id: 1,
    title: "Modern Web Development",
    description:
      "Learn the latest techniques in web development with React and Next.js",
    category: "Technology",
    price: 99.99,
    createdAt: "2025-06-21T10:30:00Z",
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    description:
      "Master the fundamentals of user interface and user experience design",
    category: "Design",
    price: 79.99,
    createdAt: "2025-06-15T14:20:00Z",
  },
  {
    id: 3,
    title: "Database Optimization",
    description:
      "Advanced techniques for optimizing database performance and queries",
    category: "Backend",
    price: 129.99,
    createdAt: "2025-06-13T09:15:00Z",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications with React Native",
    category: "Mobile",
    price: 149.99,
    createdAt: "2025-06-12T16:45:00Z",
  },
  {
    id: 5,
    title: "Cloud Architecture",
    description:
      "Design scalable cloud solutions using AWS and modern DevOps practices",
    category: "Cloud",
    price: 199.99,
    createdAt: "2025-06-11T11:30:00Z",
  },
  {
    id: 6,
    title: "API Development",
    description: "Create robust RESTful APIs and GraphQL endpoints",
    category: "Backend",
    price: 89.99,
    createdAt: "2025-06-10T13:20:00Z",
  },
];
