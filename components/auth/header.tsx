interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-3 items-center">
      <h1 className="text-3xl font-semibold">Auth Testing</h1>
      <p className="text-lg font-semibold text-muted-foreground">{label}</p>
    </div>
  );
};
