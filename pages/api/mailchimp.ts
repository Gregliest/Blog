import { NextApiRequest, NextApiResponse } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'

export const MailchimpResult = {
  Success: 0,
  AlreadySubscribed: 1,
  Error: 2,
}

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // E.g. us1
})

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    })

    return res.status(201).json({ status: MailchimpResult.Success })
  } catch (error) {
    if (error.status == 400 && error.response.body.title == 'Member Exists') {
      return res.status(400).json({ status: MailchimpResult.AlreadySubscribed })
    }

    return res
      .status(500)
      .json({ status: MailchimpResult.Error, error: error.message || error.toString() })
  }
}
