import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock, Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginSection = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    toast.success("Login successful");
  };

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center py-20">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card mx-auto max-w-md p-8 md:p-10"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-4 text-muted">
              Login to continue using AI Product Description
              Generator.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/"
                className="text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="primary-btn w-full"
            >
              Login
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
            <button className="secondary-btn w-full gap-3">
              <FcGoogle size={22} />
              Continue with Google
            </button>

            <button className="secondary-btn w-full gap-3">
              <Github size={20} />
              Continue with GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-muted">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary"
            >
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginSection;