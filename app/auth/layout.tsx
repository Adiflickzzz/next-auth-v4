const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-blue-500">
      {children}
    </div>
  );
};

export default AuthLayout;
