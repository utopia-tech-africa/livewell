type ErrorMsgProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMsgProps) => {
  return (
    <div className="text-center items-center py-8 text-red-600 font-satoshi text-lg">
      {message}
    </div>
  );
};
