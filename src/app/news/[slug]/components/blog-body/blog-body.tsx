type BlogBodyProps = {
  body:
    | Array<{
        children?: Array<{
          text: string;
        }>;
      }>
    | null
    | undefined;
};

export const BlogBody = ({ body }: BlogBodyProps) => {
  if (!body || !Array.isArray(body)) {
    return <div className="text-neutral-500">No content available</div>;
  }

  return (
    <div className="flex flex-col gap-3 mt-2">
      {body.map((block, i) => (
        <p key={i} className="text-neutral-900 text-sm leading-6">
          {block.children?.map((child, j) => (
            <span key={j}>{child.text}</span>
          ))}
        </p>
      ))}
    </div>
  );
};
