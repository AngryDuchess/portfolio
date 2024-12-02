import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({ content }) {
  if (!content) return null;
  return <BlocksRenderer content={content} />;
}
