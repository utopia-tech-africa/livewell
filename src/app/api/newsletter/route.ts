import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Livewell Festival <info@livewellfestival.life>",
      to: email,
      subject: "Welcome to the Livewell Festival Newsletter!",
      html: `
      <section>
        <main style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #F4F6F8;">
          <div style="max-width: 620px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">

            <!-- HEADER -->
            <div style="background-color: #00637A; color: white; text-align: center; padding: 32px 24px;">
              <h1 style="font-size: 22px; font-weight: bold; margin: 0;">🎉 You're Subscribed!</h1>
              <p style="font-size: 13px; opacity: 0.9; margin-top: 6px;">
                Welcome to the Livewell Festival community
              </p>
            </div>

            <!-- BODY -->
            <div style="padding: 32px;">
              <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for subscribing to the <strong>Livewell Festival Newsletter</strong>!
              </p>

              <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
                You'll now receive updates about wellness activities, speakers, programs, volunteer opportunities, and exclusive announcements leading up to the festival.
              </p>

              <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
                We're excited to have you on this journey with us!
              </p>

              <p style="color: #4a4a4a; font-size: 15px; margin-top: 32px;">
                Best regards, <br />
                <strong>The Livewell Team</strong>
              </p>
            </div>

            <!-- FOOTER -->
            <div style="background-color: #f1f1f1; padding: 14px 0; text-align: center;">
              <p style="color: #7b7b7b; font-size: 12px; margin: 0;">
                © 2025 Livewell Festival — All rights reserved.
              </p>
            </div>

          </div>
        </main>
      </section>
      `,
    });

    if (error) {
      console.error("Email send error", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
