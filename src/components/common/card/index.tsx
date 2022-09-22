type CardProps = {
  header?: React.ReactNode;
  body: React.ReactNode;
};

export const Card = ({ header, body }: CardProps): React.ReactElement => {
  return (
    <article className="bg-gray-100 shadow-xl rounded-md h-full tablet:mb-5 tablet:bg-white laptop:bg-white desktop:bg-white">
      {header ? <header className="pt-4">{header}</header> : null}
      <main
        className="
            h-auto p-5"
      >
        {body}
      </main>
    </article>
  );
};
