import LoginForm from './LoginForm';

export const metadata = {
  title: 'Login - Vibe Kanban',
  description: 'Access your Vibe Kanban account to manage your projects, track tasks, and collaborate with your team efficiently.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Login - Vibe Kanban',
    description: 'Securely log in to Vibe Kanban to access your project boards and tasks.',
    type: 'website',
  },
};

export default function LoginPage() {
  return <LoginForm />;
}