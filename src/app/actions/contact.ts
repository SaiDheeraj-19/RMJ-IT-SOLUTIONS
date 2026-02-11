"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const requirements = formData.get('requirements') as string;

    if (!name || !email || !requirements) {
        return { error: "Please fill in all fields." };
    }

    try {
        const { error } = await resend.emails.send({
            from: 'RMJ IT Contact <onboarding@resend.dev>',
            to: ['toxiccodez19@gmail.com'],
            subject: `New Institutional Lead: ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #1a1a1a;">New Lead Engagement</h2>
                    <p style="font-size: 16px; color: #555;">You have received a new contact request from the RMJ IT website.</p>
                    <hr style="border: 0; border-top: 1px solid #eee;" />
                    <div style="margin-top: 20px;">
                        <p><strong>Identity:</strong> ${name}</p>
                        <p><strong>Institutional Email:</strong> ${email}</p>
                        <p><strong>Program Details:</strong></p>
                        <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #1a1a1a; margin-top: 10px;">
                            ${requirements}
                        </blockquote>
                    </div>
                    <p style="font-size: 12px; color: #999; margin-top: 40px;">
                        This email was sent automatically from rmjit.com via Resend.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { error: "Failed to send email. Please try again later." };
        }

        return { success: true };
    } catch (err) {
        console.error("Submission Error:", err);
        return { error: "An unexpected error occurred." };
    }
}
