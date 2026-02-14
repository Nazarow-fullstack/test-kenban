import RegisterForm from './RegisterForm';

export const metadata = {
  title: 'Register - Vibe Kanban',
  description: 'Create a new Vibe Kanban account to start organizing your projects and collaborating with your team.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Register - Vibe Kanban',
    description: 'Join Vibe Kanban today and streamline your project management workflow.',
    type: 'website',
  },
};

export default function RegisterPage() {
  return <RegisterForm />;
}