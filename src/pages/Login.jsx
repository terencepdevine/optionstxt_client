import AuthLayout from "../ui/AuthLayout";
import Button from "../ui/typography/Button";

function Login() {
  return (
    <AuthLayout>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            className="rounded-lg bg-neutral-200 p-4 shadow-inner"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="rounded-lg bg-neutral-200 p-4 shadow-inner"
          />
        </div>
        <div className="flex flex-row gap-2">
          <Button>Login</Button>
          <Button type="outline">Cancel</Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
