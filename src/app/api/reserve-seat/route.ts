import { Resend } from "resend";
import { NextResponse } from "next/server";
// import { Html, Head, Preview } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone } = await request.json();

  const firstName = name.split(" ")[0];

  try {
    const { data, error } = await resend.emails.send({
      from: "Livewell Festival <info@livewellfestival.life>",
      to: email,
      subject: "You're In! Livewell Festival - Registration Confirmed",
      //   react: EmailTemplate({ firstName }),
      html: `<section>
  <header></header>

  <div>You're In! Livewell Festival – Registration Confirmed</div>

  <main style="background-color: #00637A; margin: 0; padding: 0; font-family: Arial, sans-serif;">
    <div style="width: 100%; background-color: #f4f6f8; padding: 40px 0;">
      <div style="max-width: 620px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">

        <div style="background-color: #1e88e5; color: white; text-align: center; padding: 32px 24px;">
          <h1 style="font-size: 24px; font-weight: bold; margin: 0;">🎉 Your Registration Is Confirmed!</h1>
          <p style="font-size: 13px; opacity: 0.9; margin-top: 6px;">
            Welcome to the Livewell Festival, ${firstName}
          </p>
        </div>

        <div style="padding: 40px 32px;">

          <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
            Hi <span style="font-weight: 600;">${firstName}</span>,
          </p>

          <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
            Your registration for the <strong>Livewell Festival</strong> has
            been successfully received. We’re excited to have you join us at
            this year’s event filled with wellness, community, and fun!
          </p>

          <div style="border-left: 4px solid #1e88e5; background-color: #f9fbff; padding: 20px; border-radius: 8px; margin-bottom: 32px;">
            <h3 style="color: #1e88e5; font-size: 18px; font-weight: 600; margin-bottom: 12px;">
              📅 Event Details
            </h3>

            <p style="color: #4a4a4a; font-size: 14px; margin-bottom: 4px;">
              <strong>Date:</strong> Friday, 19th December 2025
            </p>
            <p style="color: #4a4a4a; font-size: 14px; margin-bottom: 4px;">
              <strong>Time:</strong> 09:00 AM
            </p>
            <p style="color: #4a4a4a; font-size: 14px; margin-bottom: 4px;">
              <strong>Location:</strong> Accra, Ghana
            </p>
          </div>

          <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
            <span style="color: #1e88e5; font-weight: 600;">Entry:</span> Show this email at the gate for access.
          </p>

          <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
            If you have any questions before the event, feel free to reach out.
          </p>

          <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 24px; margin-top: 32px;">
            Best regards, <br />
            <span style="font-weight: 600;">The Livewell Team</span>
          </p>

        </div>

        <div style="background-color: #f1f1f1; padding: 14px 0; text-align: center;">
          <p style="color: #7b7b7b; font-size: 12px; margin: 0;">
            © 2025 Livewell Festival — All rights reserved.
          </p>
        </div>

      </div>
    </div>
  </main>
</section>`,
    });

    if (error) {
      console.error("Email send error", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
}
