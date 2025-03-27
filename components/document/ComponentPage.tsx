export function ComponentHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-md text-gray-500">{description}</p>
    </div>
  );
}
