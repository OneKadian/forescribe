# Forescribe Frontend Assignment

![Preview](https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/foreskribe.png)  
[Click here to view the demo video](https://www.loom.com/share/850b28661a36417da0a8c7475456d7ac?sid=f887b056-6b23-4264-bc61-7e096a5585a3)

## Features

- **Tech Stack**: Next.js, TypeScript/JavaScript, TailwindCSS
- **Responsive Design**: Converted the provided Figma design into a fully responsive interface, ensuring great usability across devices.
- **Framer Motion Animations**:
  - Smooth animations on the gallery and cards.
  - Page transitions with Next.js App Router.
- **Dark Mode**: Integrated dark-light mode using TailwindCSS.
- **Form Handling**:
  - API routes handle form submissions.
  - Messages are sent to a Slack channel using a Slack webhook.

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/OneKadian/forescribe
```

### Navigate to the project directory:

```bash
cd forescribe
```

```
npm install

```

npm run dev

```

```

Configuration

To run this project, you will need a Clerk account for authentication and a Slack Webhook URL to handle form submissions.

Create a .env.local file in the root directory.
Add the following environment variables:

```
-NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
-CLERK_SECRET_KEY=<your-clerk-secret-key>
-NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
-NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
-NEXT_PUBLIC_SLACK_URL=<your-slack-webhook-url>

```
