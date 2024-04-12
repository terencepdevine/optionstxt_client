function AuthLayout({ children }) {
  return (
    <div className="flex h-full flex-col md:flex-row">
      <div className="w-1/3 p-8">{children}</div>
      <div className="bg-auth w-2/3 bg-cover bg-center"></div>
    </div>
  );
}

export default AuthLayout;
