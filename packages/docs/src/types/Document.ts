import { ReactNode } from "react";

interface Document {
  title: string;
  content: () => (string | ReactNode)[];
}

export default Document;
