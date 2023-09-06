import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// company name zento
export default function RegisterForm() {
  const { job } = useParams();
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [college, setCollege] = useState("");
  const [address, setAddress] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [highlightFields, setHighlightFields] = useState(false); // New state

  async function registerUser(ev) {
    ev.preventDefault();

    if (!name || !phoneNo || !college || !address) {
      setHighlightFields(true);
      return; // Do not proceed with registration
    }

    // Step 1: Initiate Razorpay payment
    try {
      const paymentResponse = await axios.post("/payment");
      const { id: orderId } = paymentResponse.data;

      const options = {
        key: "rzp_test_CS4YtR0JfqQy55", // Replace with your Razorpay key
        amount: 45000, // Amount in paise (45000 paise = Rs 450)
        currency: "INR",
        name: "JobNexus",
        description: "Registration Fee",
        order_id: orderId,
        prefill: {
          name,
          contact: phoneNo, // Replace with the user's actual phone number
          email: "user@example.com",
        },
        handler: async (response) => {
          // Step 2: Proceed with user registration after successful payment
          setIsRegistering(true);
          try {
            await axios.post(`/apply/${job}`, {
              name,
              phoneNo,
              college,
              address,
            });
            alert(
              "Registration successful.For updates please follow our linkedln & instagram account"
            );
          } catch (e) {
            alert("Registration failed. Please try again later");
          }
          setIsRegistering(false);
          setHighlightFields(false);
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (e) {
      alert("Failed to initiate payment. Please try again later");
    }
  }

  const isFormIncomplete = !name || !phoneNo || !college || !address;

  return (
    <div className="mt-4 grow flex items-center justify-around w-screen p-4">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="your name"
            value={name}
            autoFocus
            onChange={(ev) => setName(ev.target.value)}
            className={`w-full border my-2 px-3 py-2 rounded-lg ${
              highlightFields && !name ? "border-red-500 bg-red-100" : ""
            }`}
          />
          <input
            type="tel"
            placeholder="phone number"
            value={phoneNo}
            onChange={(ev) => setPhoneNo(ev.target.value)}
            className={`w-full border my-2 px-3 py-2 rounded-lg ${
              highlightFields && !phoneNo ? "border-red-500 bg-red-100" : ""
            }`}
          />
          <input
            type="text"
            placeholder="school / college name"
            value={college}
            onChange={(ev) => setCollege(ev.target.value)}
            className={`w-full border my-2 px-3 py-2 rounded-lg ${
              highlightFields && !college ? "border-red-500 bg-red-100" : ""
            }`}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
            className={`w-full border my-2 px-3 py-2 rounded-lg ${
              highlightFields && !address ? "border-red-500 bg-red-100" : ""
            }`}
          />
          <input type="hidden" name="job" value={job} />
          <div className="text-center py-2">Registration fee = Rs 450 /-</div>
          <button
            className={`text-white p-2 w-full rounded-lg ${
              isRegistering || isFormIncomplete
                ? "button-hover-effect"
                : "bg-primary"
            } ${isFormIncomplete ? "bg-hover_color" : "button-click-effect"}`}
            disabled={isRegistering || isFormIncomplete}
          >
            {isRegistering ? "Registering..." : "Register"}
          </button>

          <div className="text-center py-2 text-gray-500">
            Go to HomePage{" "}
            <Link className="underline text-black" to={"/"}>
              HomePage
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

{/* <button
  className={`text-white p-2 w-full rounded-lg ${
    isRegistering || isFormIncomplete ? "bg-hover_color" : "bg-primary"
  }`}
  disabled={isRegistering || isFormIncomplete}
>
  {isRegistering ? "Registering..." : "Register"}
</button>; */}
