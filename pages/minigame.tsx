import dynamic from 'next/dynamic';

const Minigame = dynamic(
  () => import('../components/MinigamePage/index'),
  { ssr: false }
)

export default Minigame;
