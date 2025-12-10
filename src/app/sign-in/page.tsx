import { SignIn } from "@stackframe/stack";
import Link from "next/link";
import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const user = await stackServerApp.getUser();
  // console.log(user);
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full space-y-8 border border-amber-100 p-5 rounded-md shadow-2xl hover:bg-amber-100">
        <SignIn />
        <Link href="/" className="px-2 border-2 py-1 rounded-md ">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
