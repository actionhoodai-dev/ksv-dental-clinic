'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendClinicalEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const procedure = formData.get('procedure') as string;
  const message = formData.get('message') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'KSV Dental <onboarding@resend.dev>',
      to: ['ksvdentalclinicsalem@gmail.com'],
      subject: `New Clinical Consultation: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; border: 1px solid #e2e8f0; borderRadius: 12px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #f97316; padding-bottom: 8px;">New Appointment Request</h2>
          <p><strong>Patient Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Proposed Procedure:</strong> ${procedure}</p>
          ${message ? `<p><strong>Details:</strong> ${message}</p>` : ''}
          <div style="margin-top: 20px; font-size: 12px; color: #64748b; border-top: 1px solid #f1f5f9; padding-top: 12px;">
            This inquiry was captured via the KSV Dental Clinic Website.
          </div>
        </div>
      `,
    });

    if (error) {
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: err };
  }
}
