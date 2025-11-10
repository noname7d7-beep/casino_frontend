import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/lang'

export default function GamePage(){
  const { slug } = useParams(); const { t } = useI18n();
  return (
    <div className="w-screen h-[100dvh] bg-black flex flex-col items-center justify-center text-center px-6">
      <motion.h1 className="text-4xl text-yellow-400 drop-shadow-[0_0_15px_#FFD700] mb-6" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
        {(t.games[slug] || slug).toUpperCase()}
      </motion.h1>
      <p className="text-white/80 text-sm mb-6">Здесь будет страница игры <b>{t.games[slug] || slug}</b>.</p>
      <Link to="/" className="text-cyan-400 font-semibold underline hover:text-yellow-300">← На главную</Link>
    </div>
  )
}
