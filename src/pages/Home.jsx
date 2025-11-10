import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/lang'

export default function Home(){
  const tap = { scale: 0.94, transition: { duration: 0.08 } }
  const { t } = useI18n()

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <motion.div whileTap={tap} animate={{ scale:[1,1.05,1] }} transition={{ duration:2, repeat:Infinity }} className="absolute top-[3.5vh] right-[5vw]">
        <Link to="/promo/penalty-shootout">
          <div className="w-[140px] h-[90px] rounded-xl overflow-hidden shadow-2xl grid place-items-center bg-gradient-to-br from-sky-700 to-cyan-400 text-white font-extrabold tracking-wide text-center leading-tight"><span>{t.promo}</span></div>
        </Link>
      </motion.div>
      <motion.div whileTap={tap} className="absolute top-[7vh] left-[6vw]"><Link to="/games/aviator"><img src="/assets/games/aviator.png" alt="Aviator" className="w-[110px] drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]"/></Link></motion.div>
      <motion.div className="absolute left-[4.5vw] top-[35vh]" animate={{opacity:[1,0.65,1]}} transition={{duration:2, repeat:Infinity}}>
        <div className="w-[150px] h-[180px] rounded-2xl bg-red-600 border-4 border-red-300 shadow-[0_0_20px_rgba(255,0,0,0.5)] flex items-center justify-center text-white text-center font-extrabold leading-tight px-2"><div>{t.accuracy}</div></div>
      </motion.div>
      <motion.h1 className="text-[3.6rem] md:text-[5rem] font-extrabold text-yellow-400 drop-shadow-[0_0_20px_#FFD700] text-center"
        animate={{scale:[1,1.03,1], textShadow:["0 0 10px #FFD700","0 0 28px #FFD700","0 0 10px #FFD700"]}} transition={{duration:2, repeat:Infinity}}>{t.moneyTalks}</motion.h1>
      <motion.div className="absolute right-[8vw] top-[38vh]" animate={{opacity:[1,0.5,1]}} transition={{duration:2, repeat:Infinity}}>
        <div className="w-[130px] h-[130px] rounded-2xl bg-[#0b1620]/90 border border-cyan-300 shadow-[0_0_18px_rgba(0,255,255,0.35)] grid place-items-center">
          <span className="text-white font-extrabold text-lg leading-tight text-center">FOR{String.fromCharCode(10)}FREE!</span>
        </div>
      </motion.div>
      <motion.div whileTap={tap} className="absolute bottom-[30%] left-[7%]"><Link to="/games/thimbles"><img src="/assets/games/thimbles.png" alt="Thimbles" className="w-[140px] drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]"/></Link></motion.div>
      <motion.div whileTap={tap} className="absolute bottom-[16%] left-[14%]"><Link to="/games/mines"><img src="/assets/games/mines.png" alt="Mines" className="w-[170px] drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]"/></Link></motion.div>
      <motion.div whileTap={tap} className="absolute bottom-[12%] left-[38%]"><Link to="/games/chicken-road"><img src="/assets/games/chickenroad.png" alt="Chicken Road" className="w-[170px] drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]"/></Link></motion.div>
      <motion.div whileTap={tap} className="absolute bottom-[26%] right-[20%]"><Link to="/games/plinko"><img src="/assets/games/plinko.png" alt="Plinko" className="w-[140px] drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]"/></Link></motion.div>
      <motion.div whileTap={tap} className="absolute bottom-[10%] right-[12%]"><Link to="/games/footballx"><img src="/assets/games/footballx.png" alt="FootballX" className="w-[170px] drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]"/></Link></motion.div>
    </div>
  )
}
