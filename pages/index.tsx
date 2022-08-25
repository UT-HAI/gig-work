import dynamic from 'next/dynamic';

const Home = dynamic(
  () => import('../components/HomePage/index'),
  { ssr: false }
)

export default Home;
