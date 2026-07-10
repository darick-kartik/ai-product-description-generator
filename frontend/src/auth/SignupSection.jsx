import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const SignupSection = () => {
  const { register, handleSubmit, reset } = useForm();

const navigate = useNavigate();
const { login } = useAuth();
  const onSubmit = async (data) => {
  if (data.password !== data.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    const response = await registerUser({
  name: data.name,
  email: data.email,
  password: data.password,
});

    if (response.success) {
      login(response.user, response.token);

      toast.success(response.message);

      reset();

      navigate("/dashboard");
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center py-20">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card mx-auto w-full max-w-md p-8 md:p-10"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Create Account
            </h1>

            <p className="mt-4 text-muted">
              Join AI Product Description Generator and start
              creating premium product descriptions instantly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />

              <input
                {...register("name")}
                type="text"
                placeholder="Full Name"
                className="input-field pl-11"
              />
            </div>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />

              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="input-field pl-11"
              />
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />

              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="input-field pl-11"
              />
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />

              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
                className="input-field pl-11"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-muted">
              <input
                type="checkbox"
                className="mt-1 accent-primary"
              />
              <span>
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>

            <button
              type="submit"
              className="primary-btn w-full"
            >
              Create Account
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted">
              OR
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-4">
           <button
  onClick={() => {
    window.location.href =
      "http://localhost:5000/api/auth/google";
  }}
  type="button"
  className="secondary-btn w-full gap-3"
>
  <FcGoogle size={22} />
  Continue with Google
</button>

            <button className="secondary-btn w-full gap-3">
              <Github size={20} />
              Continue with GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-muted">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupSection;