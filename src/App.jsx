import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { init } from '@tma.js/sdk'
import Home from './pages/Home.jsx'
import GamePage from './pages/GamePage.jsx'
import PromoPage from './pages/PromoPage.jsx'
import { useI18n, LANGS } from './i18n/lang.js'

const pageAnim = { initial:{opacity:0,y:10}, animate:{opacity:1,y:0}, exit:{opacity:0,y:-10}, transition:{duration:0.25} }

function LangSwitcher(){ const {lang,setLang}=useI18n(); return (
  <div className="absolute left-3 top-3 z-50 bg-black/40 border border-white/20 rounded-xl px-2 py-1 text-white text-sm">
    {LANGS.map(l=> <button key={l} onClick={()=>setLang(l)} className={`mx-1 ${l===lang?'text-yellow-300 font-bold':'text-white/80'}`}>{l.toUpperCase()}</button>)}
  </div>
)}

export default function App(){
  const location = useLocation()
  useEffect(()=>{ const tg=init(); tg.ready(); tg.expand(); },[])
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <LangSwitcher />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} {...pageAnim}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/games/:slug" element={<GamePage />} />
            <Route path="/promo/penalty-shootout" element={<PromoPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Link to="/" className="hidden md:block absolute bottom-2 left-3 text-white/50 hover:text-white">MONEY TALKS</Link>
    </div>
  )
}
