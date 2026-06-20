export const isRequired = (value) => {
  if (value === undefined || value === null) return "This field is required.";

  if (typeof value === "string" && value.trim() === "") {
    return "This field is required.";
  }

  return true;
};

export const minLength = (length) => ({
  value: length,
  message: `Minimum ${length} characters required.`,
});

export const maxLength = (length) => ({
  value: length,
  message: `Maximum ${length} characters allowed.`,
});

export const emailValidation = {
  required: "Email is required.",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address.",
  },
};

export const passwordValidation = {
  required: "Password is required.",
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters.",
  },
};

export const productNameValidation = {
  required: "Product name is required.",
  minLength: {
    value: 3,
    message: "Product name must be at least 3 characters.",
  },
  maxLength: {
    value: 100,
    message: "Product name cannot exceed 100 characters.",
  },
};

export const keywordsValidation = {
  maxLength: {
    value: 200,
    message: "Keywords cannot exceed 200 characters.",
  },
};

export const featuresValidation = {
  required: "Please enter product features.",
  minLength: {
    value: 10,
    message: "Please provide more detailed features.",
  },
};