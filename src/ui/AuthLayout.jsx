function AuthLayout({ children }) {
  return (
    <div className="flex h-full flex-row">
      <div className="w-1/3 p-8">{children}</div>
      <div className="w-2/3 bg-blue-600"></div>
    </div>
  );
}

export default AuthLayout;
