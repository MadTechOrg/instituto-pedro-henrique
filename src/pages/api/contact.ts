import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { EmailAttributes } from '../../interfaces/email';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(404).send('not_found');
  const emailTemplate: EmailAttributes = JSON.parse(req.body);

  const email = {
    to: 'igor_souto@outlook.com',
    from: 'institutopedrohenriquedh@gmail.com',
    templateId: 'd-7d86c013ca18464d8eb10c53783d0393',
    ip_pool: 'transactional',
    dynamic_template_data: emailTemplate,
  };

  sgMail.send(email);

  return res.status(200).json({});
}
