export const LANGS = ['ru','en','es','tr']
export const dict = {
  ru:{ promo:'ПЕНАЛЬТИ', moneyTalks:'MONEY TALKS', accuracy:'ACCURACY 99.8%', forFree:'БЕСПЛАТНО!', games:{aviator:'Aviator',mines:'Mines',plinko:'Plinko',chicken:'Chicken Road',footballx:'FootballX',thimbles:'Thimbles'} },
  en:{ promo:'PENALTY SHOOT-OUT', moneyTalks:'MONEY TALKS', accuracy:'ACCURACY 99.8%', forFree:'FOR FREE!', games:{aviator:'Aviator',mines:'Mines',plinko:'Plinko',chicken:'Chicken Road',footballx:'FootballX',thimbles:'Thimbles'} },
  es:{ promo:'PENALTY SHOOT-OUT', moneyTalks:'MONEY TALKS', accuracy:'PRECISIÓN 99.8%', forFree:'¡GRATIS!', games:{aviator:'Aviator',mines:'Mines',plinko:'Plinko',chicken:'Chicken Road',footballx:'FootballX',thimbles:'Thimbles'} },
  tr:{ promo:'PENALTI', moneyTalks:'MONEY TALKS', accuracy:'DOĞRULUK %99.8', forFree:'ÜCRETSİZ!', games:{aviator:'Aviator',mines:'Mines',plinko:'Plinko',chicken:'Chicken Road',footballx:'FootballX',thimbles:'Thimbles'} },
}
import React, {createContext, useContext, useMemo, useState, useEffect} from 'react'
const I18nCtx = createContext()
export function I18nProvider({children}){
  const [lang,setLang]=useState(()=>localStorage.getItem('lang')||'ru')
  useEffect(()=>{localStorage.setItem('lang',lang)},[lang])
  const t=useMemo(()=>dict[lang]||dict.ru,[lang])
  return <I18nCtx.Provider value={{lang,setLang,t}}>{children}</I18nCtx.Provider>
}
export function useI18n(){ return useContext(I18nCtx) }
