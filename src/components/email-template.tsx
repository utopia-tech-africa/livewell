import { Html, Head, Preview } from "@react-email/components";

const EmailTemplate = ({ firstName }: { firstName: string }) => {
  return (
    <Html>
      <Head />
      <Preview>
        You&apos;re In! Livewell Festival – Registration Confirmed
      </Preview>

      <body className="bg-[#f4f6f8] p-0 m-0 font-sans">
        <div className="w-full bg-[#f4f6f8] py-10">
          {/* Outer container */}
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* HEADER */}
            <div className="bg-[#1e88e5] text-white text-center py-8 px-6">
              <h1 className="text-2xl font-bold">
                🎉 Your Registration Is Confirmed!
              </h1>
              <p className="text-sm opacity-90 mt-1">
                Welcome to the Livewell Festival, {firstName}
              </p>
            </div>

            {/* BODY CONTENT */}
            <div className="px-8 py-10">
              <p className="text-gray-700 text-base mb-6">
                Hi <span className="font-semibold">{firstName}</span>,
              </p>

              <p className="text-gray-700 text-base leading-7 mb-6">
                Your registration for the <strong>Livewell Festival</strong> has
                been successfully received. We’re excited to have you join us at
                this year’s event filled with wellness, community, and fun!
              </p>

              {/* EVENT DETAILS CARD */}
              <div className="border-l-4 border-[#1e88e5] bg-[#f9fbff] p-5 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-[#1e88e5] mb-3 flex items-center">
                  📅 Event Details
                </h3>

                <p className="text-gray-700 text-sm mb-1">
                  <strong>Date:</strong> Friday, 19th December 2025
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  <strong>Time:</strong> 09:00 AM
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Location:</strong> Accra, Ghana
                </p>
              </div>

              {/* ENTRY NOTE */}
              <p className="text-gray-700 text-base leading-6 mb-4">
                <span className="font-bold text-[#1e88e5]">Entry:</span> Show
                this email at the gate for access.
              </p>

              <p className="text-gray-700 text-base leading-6 mb-6">
                If you have any questions before the event, feel free to reach
                out.
              </p>

              <p className="text-gray-700 text-base leading-6 mt-8">
                Best regards, <br />
                <span className="font-semibold">The Livewell Team</span>
              </p>
            </div>

            {/* FOOTER */}
            <div className="bg-gray-100 py-4 text-center">
              <p className="text-xs text-gray-500">
                © 2025 Livewell Festival — All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </body>
    </Html>
  );
};

export default EmailTemplate;
