import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function LoginPage() {
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (generalError) {
      setGeneralError("");
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(\+?\d{9,15})$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setGeneralError("");
    setIsLoading(true);

    try {
      // ──────────────────────────────────────────────
      // TODO: Replace with actual API call
      // const response = await axios.post("/api/auth/login", {
      //   phone: formData.phone,
      //   password: formData.password,
      // });
      // navigate("/user/menu");
      // ──────────────────────────────────────────────

      // Simulated delay for UI testing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulated error for demonstration (remove when API is connected)
      setGeneralError("Login failed. Please check your credentials and try again.");
    } catch (err) {
      // Handle API errors
      // if (err.response) {
      //   setGeneralError(err.response.data.message || "Invalid credentials");
      // } else {
      //   setGeneralError("Network error. Please try again later.");
      // }
      setGeneralError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-10">
          {/* Logo / Branding */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-2xl text-white shadow-md">
              🍴
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
            <p className="mt-1 text-sm text-gray-500">
              Sign in to your Campus Eats account
            </p>
          </div>

          {/* General Error */}
          {generalError && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
              {generalError}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Phone Number */}
            <div>
              <label
                htmlFor="login-phone"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="login-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 0912345678"
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                  errors.phone
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-300 focus:border-orange-400 focus:ring-orange-200"
                }`}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="login-password"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                  errors.password
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-300 focus:border-orange-400 focus:ring-orange-200"
                }`}
              />
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-orange-500 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Signing in…
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Footer Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-orange-500 hover:text-orange-600 transition"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}