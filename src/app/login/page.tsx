export const metadata = {
  title: "Login | SmartKalc",
  description: "Log in to your SmartKalc account.",
};

export default function LoginPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-semibold mb-4 text-gray-900">Login Page</h1>
      <p className="text-base text-gray-600">Please enter your credentials to access your account.</p>
    </div>
  );
}
