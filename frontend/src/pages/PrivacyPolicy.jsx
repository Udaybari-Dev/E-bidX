import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="text-white ">
        <div className="flex items-center justify-center flex-col h-[280px] bg-hero-img bg-cover">
          <h1 className="text-center font-bold text-3xl">Privacy Policy</h1>
          <div className="flex gap-2 font-medium pt-2">
            <Link
              to="/"
              className=" no-underline hover:text-theme-color transition-all"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-theme-color">Privacy Policy</span>
          </div>
        </div>
        <div className="px-4 py-20 flex flex-col m-auto gap-10 max-w-[1300px]">
          {/* Privacy Policy */}

          <div>
            <h2 className="font-bold text-2xl text-heading-color">
              Privacy Policy
            </h2>
            <p className="text-body-text-color pt-5">
            The Real-Time Online Auction system is committed to protecting user privacy. This Privacy Policy 
            explains the information we collect, how it is used, and the measures we take to safeguard your personal data.
            </p>
          </div>
          {/* Collect Information */}
          <div>
            <h2 className="font-bold text-2xl text-heading-color">
               Information Collection
            </h2>

            <ul className="flex flex-col gap-2 list-disc pl-4 text-body-text-color pt-5">
              <li>
                <span className="font-semibold">Personal Information:</span>{" "}
                This includes details that can identify you, such as your name, email, phone number,
                billing, and shipping addresses. You provide this data when registering, listing items, bidding, or reaching out to us.
              </li>
              <li>
                <span className="font-semibold">
                  Non-Personal Information:{" "}
                </span>
                This refers to data that doesn’t personally identify you, 
                like IP address, browsing history, and device data. It is automatically collected when you interact with our platform.
              </li>
            </ul>
          </div>
          {/* Usage of Information */}
          <div>
            <h2 className="font-bold text-2xl text-heading-color">
              Usage of Information
            </h2>
            <p className="text-body-text-color pt-5">
              We use the information we collect for the following purposes:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-4 text-body-text-color pt-5">
              <li>
                <span className="font-semibold">
                  To deliver and enhance our services:
                </span>{" "}
                Your information helps us manage auctions, process payments, notify you of bids, and assist with customer service.
              </li>
              <li>
                <span className="font-semibold">
                To customize your experience:{" "}
                </span>
                We personalize content, like suggesting auctions you may like, using your preferences.
              </li>
              <li>
                <span className="font-semibold">
                To send marketing content{" "}
                </span>
                We may contact you with newsletters or promotional messages using your contact info. You can opt out at any time.
              </li>
              <li>
                <span className="font-semibold">
                  To send you marketing communications:{" "}
                </span>
                We may use your contact information to send you marketing
                communications, such as newsletters and promotional offers. You
                can opt out of receiving these communications at any time.
              </li>
            </ul>
          </div>
          {/* Usage of Information */}
          <div>
            <h2 className="font-bold text-2xl text-heading-color">
             User Data Security 
            </h2>
            <p className="text-body-text-color pt-5">
            We implement measures to keep your personal data safe from unauthorized access or misuse, including:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-4 text-body-text-color pt-5">
              <li>Secure server storage</li>
              <li>Encryption protocols for sensitive data</li>
              <li>
                Restricted access to authorized staff only
              </li>
              <li> We conduct routine security assessments and system audits to 
              identify and address potential vulnerabilities promptly.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-heading-color">
            Copyright and Protection
            </h2>
            <p className="text-body-text-color pt-5">
            Our Real-Time Online Auction system honors intellectual property rights. Users may not list items 
            that infringe on trademarks or copyrights. We also safeguard our platform against unauthorized intrusions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
