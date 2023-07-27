import { useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'

import Button from 'components/UI/Button/Button'
import Heart from 'components/UI/Icons/Heart'

import styles from './Ads.module.scss'

const DisplayAd = ({ id, x, y, showRemoveBtn }) => {
  const { t } = useTranslation('common')

  const isProduction = process.env.NODE_ENV === 'production'
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isProduction && isClient && localStorage.getItem('hideAds') !== 'yes') {
      try {
        // @ts-ignore - adsbygoogle not detected as a prop of window
        if (!window.adsbygoogle) {
          // Load Google AdSense script only if it's not already loaded
          const script = document.createElement('script')
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
          script.async = true
          document.body.appendChild(script)
        }

        // Push the ads only if adsbygoogle is defined
        // @ts-ignore - adsbygoogle not detected as a prop of window
        if (window.adsbygoogle) {
          // @ts-ignore - adsbygoogle not detected as a prop of window
          window.adsbygoogle.push({})
        }
      } catch (err) {
        console.error(err)
      }
    }
  }, [])

  const jsxRemoveAds = showRemoveBtn ? (
    <Button
      text={
        <>
          {t('remove-ads')}
          <Heart />
        </>
      }
      href="/account"
      style={{
        margin: '4px 0',
        padding: '0.2em 0',
        width: `${x}px`,
      }}
    />
  ) : null

  if (!isClient || localStorage.getItem('hideAds') === 'yes') {
    return null
  }

  if (!isProduction) {
    return (
      <>
        <img src={`https://placekitten.com/${x}/${y}`} className={styles.placeholder} />
        {jsxRemoveAds}
      </>
    )
  }

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: `${x}px`, height: `${y}px` }}
        data-ad-client="ca-pub-2284751191864068"
        data-ad-slot={id}
      />
      {jsxRemoveAds}
    </>
  )
}

DisplayAd.defaultProps = {
  showRemoveBtn: false,
}

export default DisplayAd
