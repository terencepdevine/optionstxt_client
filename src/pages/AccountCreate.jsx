import AuthLayout from "../ui/AuthLayout";
import Button from "../ui/typography/Button";

function AccountCreate() {
  return (
    <AuthLayout>
      <form>
        <div>
          <label>Username</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
        <div>
          <Button>Create Account</Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default AccountCreate;
