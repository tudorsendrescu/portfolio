export const site = {
  name: 'Sendrescu Tudor',
  role: 'Copywriter & Developer',
  headline: 'I write the copy and build the page.',
  subheadline:
    'A copywriter who can also build. Hire me for the words — emails, ads, landing pages, scripts — for the website itself, or for both, built as one piece.',
  email: 'sendrescutudor@gmail.com',
  github: 'https://github.com/tudorsendrescu',
  linkedin: '' as string, // add a URL to reveal the LinkedIn link

  // --- Contact page settings (fill these in to switch features on) ---
  phone: '' as string, // optional public phone number; leave empty to hide the phone row
  calendly: 'https://calendly.com/sendrescutudor/intro-call' as string, // Calendly event link; empty hides the "Book a call" button
  contactFormKey: '1d60ca89-4dcc-443e-be2c-86b1d2685733' as string, // Web3Forms access key — makes the message form deliver to your inbox
} as const
