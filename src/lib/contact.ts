"use server";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  budget?: string;
  description: string;
  preferredContact: string;
}

export interface ContactFormState {
  success: boolean;
  error: boolean;
  message: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: (formData.get("company") as string) || undefined,
    projectType: formData.get("projectType") as string,
    budget: (formData.get("budget") as string) || undefined,
    description: formData.get("description") as string,
    preferredContact: formData.get("preferredContact") as string,
  };

  if (!data.name || !data.email || !data.description) {
    return {
      success: false,
      error: true,
      message: "Please fill in all required fields.",
    };
  }

  // TODO: Connect to email service or backend API
  // Example: await sendEmail(data);
  // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });

  console.log("Contact form submission:", data);

  return {
    success: true,
    error: false,
    message:
      "Thank you for reaching out. We'll get back to you within 24 hours.",
  };
}
