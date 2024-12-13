import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";  // Import SweetAlert2
import "./events.css";

const Registration = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    category: "",
    photo: null,
    signature: null,
    phoneNumber: "",
    email: "",
    idProof: null,
    paymentScreenshot: null,
  });

  const db = getFirestore();
  const storage = getStorage();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handlePaymentVerification = () => {
    // Simulate payment verification
    setPaymentDone(true);
    alert("Payment verified successfully!");
  };

  const uploadFile = async (file, filePath) => {
    if (!file) return null;
    const storageRef = ref(storage, filePath);
    await uploadBytes(storageRef, file);
    return filePath;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
    if (!paymentDone) {
      alert("Please complete the payment and upload the screenshot.");
      return;
    }

    try {
      // Upload files to Firebase Storage
      const photoPath = await uploadFile(formData.photo, `photos/${formData.name}_photo`);
      const signaturePath = await uploadFile(formData.signature, `signatures/${formData.name}_signature`);
      const idProofPath = await uploadFile(formData.idProof, `idProofs/${formData.name}_idProof`);
      const paymentScreenshotPath = await uploadFile(
        formData.paymentScreenshot,
        `paymentScreenshots/${formData.name}_paymentScreenshot`
      );

      // Save data to Firestore
      await addDoc(collection(db, "registrations"), {
        name: formData.name,
        age: formData.age,
        category: formData.category,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        photoPath,
        signaturePath,
        idProofPath,
        paymentScreenshotPath,
      });

      // SweetAlert2 Success Message
      Swal.fire({
        title: "Success!",
        text: "Your registration has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset the form
      setFormData({
        name: "",
        age: "",
        category: "",
        photo: null,
        signature: null,
        phoneNumber: "",
        email: "",
        idProof: null,
        paymentScreenshot: null,
      });
      setTermsAccepted(false);
      setPaymentDone(false);
    } catch (error) {
      console.error("Error registering user: ", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="registration-container">
      <h1>Hackathon Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
        </label>
        <label>
          Category:
          <select name="category" value={formData.category} onChange={handleInputChange} required>
            <option value="">Select</option>
            <option value="college">College Student</option>
            <option value="working">Working Employee</option>
          </select>
        </label>
        <label>
          Photo:
          <input type="file" name="photo" accept="image/*" onChange={handleInputChange} required />
        </label>
        <label>
          Signature:
          <input type="file" name="signature" accept="image/*" onChange={handleInputChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
        </label>
        <label>
          Email ID:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <label>
          ID Proof (Aadhaar):
          <input type="file" name="idProof" accept="image/*,application/pdf" onChange={handleInputChange} required />
        </label>
        <div className="payment-section">
          <p>Scan the QR code to make the payment:</p>
          <div className="qr-code-placeholder">
            <img src="/images/qr_code.svg" alt="QR Code" width="150" height="150" />
          </div>
          <button type="button" onClick={handlePaymentVerification}>
            Verify Payment
          </button>
          {paymentDone && (
            <label>
              Payment Screenshot:
              <input
                type="file"
                name="paymentScreenshot"
                accept="image/*"
                onChange={handleInputChange}
                required
              />
            </label>
          )}
        </div>
        <label>
          <input type="checkbox" checked={termsAccepted} onChange={handleTermsChange} />
          I have read and agree to the terms and conditions.
        </label>
        <button type="submit" disabled={!termsAccepted || !paymentDone}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
