import dynamic from 'next/dynamic';

const Login = dynamic(
  () => import('../components/LoginPage/index'),
  { ssr: false }
)

export default Login;
