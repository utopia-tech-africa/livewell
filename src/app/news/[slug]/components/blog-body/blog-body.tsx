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
    return (
      <div className="text-neutral-500 text-center items-center py-8 font-satoshi text-lg">
        No content available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 mt-2 font-satoshi">
      {body.map((block, i) => (
        <p
          key={i}
          className="text-neutral-900 text-base md:text-lg font-satoshi leading-6"
        >
          {block.children?.map((child, j) => (
            <span key={j}>{child.text}</span>
          ))}
        </p>
      ))}
    </div>
  );
};
