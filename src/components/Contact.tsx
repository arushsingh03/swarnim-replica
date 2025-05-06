"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
    message: "",
    acceptTerms: false,
    captchaVerified: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: "acceptTerms" | "captchaVerified") => {
    setFormData((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const verifyCaptcha = () => {
    setFormData((prev) => ({
      ...prev,
      captchaVerified: !prev.captchaVerified,
    }));
  };

  const handleSubmit = async () => {
    setFormError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.emailId ||
      !formData.message
    ) {
      setFormError("Please fill in all required fields");
      return;
    }

    if (!formData.acceptTerms) {
      setFormError("Please accept the privacy policy and terms of use");
      return;
    }

    if (!formData.captchaVerified) {
      setFormError("Please verify you are not a robot");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailId: "",
        message: "",
        acceptTerms: false,
        captchaVerified: false,
      });
    } catch (error) {
      setFormError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadBrochure = () => {
    alert("Downloading brochure...");
  };

  return (
    <div className="bg-white min-h-screen z-100 ">
      <div className="container mx-auto px-30 py-12">
        <h1 className="text-4xl md:text-5xl font-montserrat mb-8">
          <span className="text-gray-400 font-abt-bold">Enquire</span>
          <span className="text-black font-abt-bold"> Now</span>
        </h1>

        <div className="bg-white p-8 border border-gray-900 font-montserrat">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <label className="block mb-1 text-gray-900">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full pb-2 border-b border-gray-900 focus:outline-none focus:border-gray-500"
                placeholder=""
              />
            </div>

            <div className="relative">
              <label className="block mb-1 text-gray-900">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full pb-2 border-b border-gray-900 focus:outline-none focus:border-gray-500"
                placeholder=""
              />
            </div>

            <div className="relative">
              <label className="block mb-1 text-gray-900">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full pb-2 border-b border-gray-900 focus:outline-none focus:border-gray-500"
                placeholder=""
              />
            </div>

            <div className="relative">
              <label className="block mb-1 text-gray-900">
                Email Id<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                className="w-full pb-2 border-b border-gray-900 focus:outline-none focus:border-gray-500"
                placeholder=""
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-gray-900">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full pb-2 border-b border-gray-900 focus:outline-none focus:border-gray-500 resize-none"
              placeholder=""
            />
          </div>

          <div className="mb-6 flex justify-start">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*4NhFKMxr-qXodjYpxtiE0w.gif"
              alt="reCAPTCHA"
              className="h-30 w-50"
            />
          </div>

          <div className="mb-6">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleCheckboxChange("acceptTerms")}
            >
              <div className="mr-2 w-5 h-5 border border-gray-300 flex items-center justify-center bg-white">
                {formData.acceptTerms && (
                  <div className="w-3 h-3 bg-blue-500"></div>
                )}
              </div>
              <span className="text-sm text-gray-700">
                I accept the privacy policy and terms of use
              </span>
            </div>
          </div>

          {formError && <div className="mb-4 text-red-500">{formError}</div>}

          {formSuccess && (
            <div className="mb-4 text-green-500">
              Form submitted successfully!
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="border border-gray-800 px-8 py-2 uppercase text-sm hover:bg-gray-100 transition-colors"
            >
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>
          </div>
        </div>

        <div className="mt-12 bg-gray-100 p-8 rounded-md font-montserrat">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className=" mb-2">Canga Global Homes Private Limited</h3>
              <p className="text-sm text-gray-600 mb-2 ">
                Ground Floor, Vatika Tower A, Sector 54, Golf Course Road,
                Gurugram, Haryana 122003
              </p>

              <p className="mt-4 mb-4">
                <a
                  href="tel:+919124192301"
                  className="group relative inline-block text-gray-800"
                >
                  +91-1244192301
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
                </a>
              </p>

              <p className="text-xs text-gray-500 mt-8">
                Disclaimer : All designs, specifications are illustrative and
                subject to change. All images are graphic depiction and purely
                artistic in nature.
              </p>
            </div>

            <div className="mt-8 md:mt-0">
              <div className="flex gap-6 font-montserrat">
                {[
                  "Overview",
                  "Location",
                  "Amenities",
                  "Floor Plan",
                  "Construction Update",
                ].map((item) => (
                  <div key={item} className="group relative text-xs font-bold">
                    <button className="text-gray-800 hover:text-gray-600 whitespace-nowrap">
                      {item}
                    </button>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-xs font-bold flex justify-end">
                <button
                  onClick={downloadBrochure}
                  className="group relative text-gray-800 hover:text-gray-600"
                >
                  Download Brochure
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
