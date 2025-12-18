// Form validation utility with real-time feedback
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Phone is optional - if empty, it's valid
  if (!phone || typeof phone !== 'string') return true;
  // If provided, must match format
  const phoneRegex = /^[\d\s\-+()]{7,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateName = (name) => {
  // At least 2 characters, no leading/trailing spaces
  if (!name || typeof name !== 'string') return false;
  return name.trim().length >= 2;
};

export const validateMessage = (message) => {
  // At least 10 characters
  if (!message || typeof message !== 'string') return false;
  return message.trim().length >= 10;
};

export const validateContactForm = (formData) => {
  const errors = {};

  if (!validateName(formData.user_name)) {
    errors.user_name = 'Name must be at least 2 characters';
  }

  if (!validateEmail(formData.user_email)) {
    errors.user_email = 'Please enter a valid email address';
  }

  if (!validatePhone(formData.user_phone)) {
    errors.user_phone = 'Please enter a valid phone number';
  }

  if (!validateMessage(formData.message)) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateNewsletterEmail = (email) => {
  return validateEmail(email);
};

const formValidation = {
  validateEmail,
  validatePhone,
  validateName,
  validateMessage,
  validateContactForm,
  validateNewsletterEmail,
};

export default formValidation;
