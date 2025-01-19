import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, subject, message } = body;

    const slackMessage = {
      text: `New Contact Form Submission:\n\nUser Email: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

    const slackWebhookUrl = process.env.NEXT_PUBLIC_SLACK_URL;

    if (!slackWebhookUrl) {
      throw new Error("Slack webhook URL is not configured");
    }

    const response = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to Slack");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}