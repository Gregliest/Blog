import React, { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'
import { MailchimpResult } from 'pages/api/mailchimp'

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { status } = await res.json()
    if (status == MailchimpResult.Error) {
      setMessage('There was a problem, check your email address.')
      return
    }

    if (status == MailchimpResult.AlreadySubscribed) {
      setMessage('You were already subscribed!')
    }

    inputEl.current.value = ''
    setSubscribed(true)
  }

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-500 ">{title}</div>
      <form className="flex flex-col sm:flex-row lg:flex-col" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
            id="email-input"
            name="email"
            placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="ml-4 flex rounded-md shadow-sm lg:mt-2 lg:ml-0 lg:w-full">
          <button
            className={`w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white
              ${subscribed ? 'cursor-default' : 'hover:bg-primary-700'}
              focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Sign up'}
          </button>
        </div>
      </form>
      {message && <div className="w-full pt-2 text-sm text-red-500">{message}</div>}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="py-6 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
