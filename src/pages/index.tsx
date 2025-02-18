import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../components/PageHeader';
import { PageFooter } from '../components/PageFooter';
import { YoutubeVideo } from '../components/YoutubeVideo';
import { ElementOnScroll } from '../components/ElementOnScroll';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Home";

  return (
    <>

      <PageHeader pageName={pageName} />

      <main className={pageName}>
        <div className="splashContainer">
          <div className="splashImage" style={{ backgroundImage: 'url("/splash_poster.jpg")' }}> </div>
          <div className="splashVideo">
            <video autoPlay loop muted poster="/splash_poster.jpg">
              <source src="./splash.mp4" type="video/mp4" />
              <source src="./splash.webm" type="video/webm" />
            </video>
          </div>
          <div className="splashOverlay"> </div>
          <div className="splashText">
            <div className="inner">
              <span className="quote">{t('Proof that the unofficial option is sometimes the best option')}</span>
              <span className="author">- The Verge</span>
              <Link href="https://discord.com/invite/shipofharkinian">
                <a className="splashButton" target="_blank">
                  <span>{t('Download on')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-169 292.9 256 198.2">
                    <title>Discord</title>
                    <path d="M47.9,309.5c-16.6-7.8-34.3-13.4-52.8-16.6c-2.3,4.1-4.9,9.6-6.8,14c-19.7-3-39.2-3-58.5,0   c-1.8-4.4-4.6-9.9-6.8-14c-18.5,3.2-36.3,8.9-52.9,16.6c-33.4,50.5-42.5,99.8-38,148.3c22.2,16.6,43.7,26.6,64.8,33.2   c5.2-7.2,9.9-14.8,13.9-22.8c-7.6-2.9-14.9-6.5-21.8-10.6c1.8-1.4,3.6-2.8,5.4-4.2c42.1,19.7,87.9,19.7,129.5,0   c1.8,1.5,3.5,2.9,5.4,4.2c-6.9,4.2-14.3,7.8-21.9,10.7c4,8,8.6,15.7,13.9,22.8c21.1-6.6,42.6-16.6,64.8-33.2   C91.2,401.6,76.8,352.8,47.9,309.5z M-83.5,428c-12.6,0-23-11.8-23-26.2s10.1-26.2,23-26.2c12.9,0,23.2,11.8,23,26.2   C-60.5,416.2-70.7,428-83.5,428z M1.5,428c-12.6,0-23-11.8-23-26.2s10.1-26.2,23-26.2c12.9,0,23.2,11.8,23,26.2   C24.5,416.2,14.4,428,1.5,428z"/>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <section className="featureList">
          <div className="container">
            <div className="column">
              <ElementOnScroll>
                <div className="title">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="framerate" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"></path></svg>
                  </div>
                  <h1>{t('Higher framerate')}</h1>
                </div>
                <span>{t('No longer constrained by 90s console hardware, your experience will now be as silky smooth as your modern GPU and monitor can handle!')}</span>
              </ElementOnScroll>
            </div>
            <div className="column">
              <ElementOnScroll>
                <div className="title">
                  
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="enhancements" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path></svg>
                  </div>
                  <h1>{t('Enhancements')}</h1>
                  
                </div>
                <span>{t('Make your own fun! With a plethora of enhancements and cheats available, you\'re guaranteed to find a new way to play!')}</span>
              </ElementOnScroll>
            </div>
            <div className="column">
              <ElementOnScroll>
                <div className="title">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="randomizer" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"></path></svg>
                  </div>
                  <h1>{t('Randomizer')}</h1>
                </div>
                <span>{t('Shuffle what rewards you get from things like chests, skulltulas, and more with the built-in randomizer! Endless replayability! No patching required!')}</span>
              </ElementOnScroll>
            </div>
          </div>
          <div className="container supportedPlatforms">
            <div className="column">
              <h2>{t('Available platforms:')}</h2>
              <div className="logos">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 257 257"><title>Windows</title><path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 312"><title>Linux</title><path d="M128.6640625 79.2793c0 1-1 1-1 1h-1c-1 0-1-1-2-2 0 0-1-1-1-2s0-1 1-1l2 1c1 1 2 2 2 3m-18-10c0-5-2-8-5-8 0 0 0 1-1 1v2h3c0 2 1 3 1 5h2m35-5c2 0 3 2 4 5h2c-1-1-1-2-1-3s0-2-1-3-2-2-3-2c0 0-1 1-2 1 0 1 1 1 1 2m-30 16c-1 0-1 0-1-1s0-2 1-3c2 0 3-1 3-1 1 0 1 1 1 1 0 1-1 2-3 4h-1m-11-1c-4-2-5-5-5-10 0-3 0-5 2-7 1-2 3-3 5-3s3 1 5 3c1 3 2 6 2 9v2h1v-1c1 0 1-2 1-6 0-3 0-6-2-9s-4-5-8-5c-3 0-6 2-7 5-2 4-2.4 7-2.4 12 0 4 1.4 8 5.4 12 1-1 2-1 3-2m125 141c1 0 1-.4 1-1.3 0-2.2-1-4.8-4-7.7-3-3-8-4.9-14-5.7-1-.1-2-.1-2-.1-1-.2-1-.2-2-.2-1-.1-3-.3-4-.5 3-9.3 4-17.5 4-24.7 0-10-2-17-6-23s-8-9-13-10c-1 1-1 1-1 2 5 2 10 6 13 12 3 7 4 13 4 20 0 5.6-1 13.9-5 24.5-4 1.6-8 5.3-11 11.1 0 .9 0 1.4 1 1.4 0 0 1-.9 2-2.6 2-1.7 3-3.4 5-5.1 3-1.7 5-2.6 8-2.6 5 0 10 .7 13 2.1 4 1.3 6 2.7 7 4.3 1 1.5 2 2.9 3 4.2 0 1.3 1 1.9 1 1.9m-92-145c-1-1-1-3-1-5 0-4 0-6 2-9 2-2 4-3 6-3 3 0 5 2 7 4 1 3 2 5 2 8 0 5-2 8-6 9 0 0 1 1 2 1 2 0 3 1 5 2 1-6 2-10 2-15 0-6-1-10-3-13-3-3-6-4-10-4-3 0-6 1-9 3-2 3-3 5-3 8 0 5 1 9 3 13 1 0 2 1 3 1m12 16c-13 9-23 13-31 13-7 0-14-3-20-8 1 2 2 4 3 5l6 6c4 4 9 6 14 6 7 0 15-4 25-11l9-6c2-2 4-4 4-7 0-1 0-2-1-2-1-2-6-5-16-8-9-4-16-6-20-6-3 0-8 2-15 6-6 4-10 8-10 12 0 0 1 1 2 3 6 5 12 8 18 8 8 0 18-4 31-14v2c1 0 1 1 1 1m23 202c4 7.52 11 11.3 19 11.3 2 0 4-.3 6-.9 2-.4 4-1.1 5-1.9 1-.7 2-1.4 3-2.2 2-.7 2-1.2 3-1.7l17-14.7c4-3.19 8-5.98 13-8.4 4-2.4 8-4 10-4.9 3-.8 5-2 7-3.6 1-1.5 2-3.4 2-5.8 0-2.9-2-5.1-4-6.7s-4-2.7-6-3.4-4-2.3-7-5c-2-2.6-4-6.2-5-10.9l-1-5.8c-1-2.7-1-4.7-2-5.8 0-.3 0-.4-1-.4s-3 .9-4 2.6c-2 1.7-4 3.6-6 5.6-1 2-4 3.8-6 5.5-3 1.7-6 2.6-8 2.6-8 0-12-2.2-15-6.5-2-3.2-3-6.9-4-11.1-2-1.7-3-2.6-5-2.6-5 0-7 5.2-7 15.7v31.1c0 .9-1 2.9-1 6-1 3.1-1 6.62-1 10.6l-2 11.1v.17m-145-5.29c9.3 1.36 20 4.27 32.1 8.71 12.1 4.4 19.5 6.7 22.2 6.7 7 0 12.8-3.1 17.6-9.09 1-1.94 1-4.22 1-6.84 0-9.45-5.7-21.4-17.1-35.9l-6.8-9.1c-1.4-1.9-3.1-4.8-5.3-8.7-2.1-3.9-4-6.9-5.5-9-1.3-2.3-3.4-4.6-6.1-6.9-2.6-2.3-5.6-3.8-8.9-4.6-4.2.8-7.1 2.2-8.5 4.1s-2.2 4-2.4 6.2c-.3 2.1-.9 3.5-1.9 4.2-1 .6-2.7 1.1-5 1.6-.5 0-1.4 0-2.7.1h-2.7c-5.3 0-8.9.6-10.8 1.6-2.5 2.9-3.8 6.2-3.8 9.7 0 1.6.4 4.3 1.2 8.1.8 3.7 1.2 6.7 1.2 8.8 0 4.1-1.2 8.2-3.7 12.3-2.5 4.3-3.8 7.5-3.8 9.78 1 3.88 7.6 6.61 19.7 8.21m33.3-90.9c0-6.9 1.8-14.5 5.5-23.5 3.6-9 7.2-15 10.7-19-.2-1-.7-1-1.5-1l-1-1c-2.9 3-6.4 10-10.6 20-4.2 9-6.4 17.3-6.4 23.4 0 4.5 1.1 8.4 3.1 11.8 2.2 3.3 7.5 8.1 15.9 14.2l10.6 6.9c11.3 9.8 17.3 16.6 17.3 20.6 0 2.1-1 4.2-4 6.5-2 2.4-4.7 3.6-7 3.6-.2 0-.3.2-.3.7 0 .1 1 2.1 3.1 6 4.2 5.7 13.2 8.5 25.2 8.5 22 0 39-9 52-27 0-5 0-8.1-1-9.4v-3.7c0-6.5 1-11.4 3-14.6s4-4.7 7-4.7c2 0 4 .7 6 2.2 1-7.7 1-14.4 1-20.4 0-9.1 0-16.6-2-23.6-1-6-3-11-5-15l-6-9c-2-3-3-6-5-9-1-4-2-7-2-12-3-5-5-10-8-15-2-5-4-10-6-14l-9 7c-10 7-18 10-25 10-6 0-11-1-14-5l-6-5c0 3-1 7-3 11l-6.3 12c-2.8 7-4.3 11-4.6 14-.4 2-.7 4-.9 4l-7.5 15c-8.1 15-12.2 28.9-12.2 40.4 0 2.3.2 4.7.6 7.1-4.5-3.1-6.7-7.4-6.7-13m71.6 94.6c-13 0-23 1.76-30 5.25v-.3c-5 6-10.6 9.1-18.4 9.1-4.9 0-12.6-1.9-23-5.7-10.5-3.6-19.8-6.36-27.9-8.18-.8-.23-2.6-.57-5.5-1.03-2.8-.45-5.4-.91-7.7-1.37-2.1-.45-4.5-1.13-7.1-2.05-2.5-.79-4.5-1.82-6-3.07-1.38-1.26-2.06-2.68-2.06-4.27 0-1.6.34-3.31 1.02-5.13.64-1.1 1.34-2.2 2.04-3.2.7-1.1 1.3-2.1 1.7-3.1.6-.9 1-1.8 1.4-2.8.4-.9.8-1.8 1-2.9.2-1 .4-2 .4-3s-.4-4-1.2-9.3c-.8-5.2-1.2-8.5-1.2-9.9 0-4.4 1-7.9 3.2-10.4s4.3-3.8 6.5-3.8h11.5c.9 0 2.3-.5 4.4-1.7.7-1.6 1.3-2.9 1.7-4.1.5-1.2.7-2.1.9-2.5.2-.6.4-1.2.6-1.7.4-.7.9-1.5 1.6-2.3-.8-1-1.2-2.3-1.2-3.9 0-1.1 0-2.1.2-2.7 0-3.6 1.7-8.7 5.3-15.4l3.5-6.3c2.9-5.4 5.1-9.4 6.7-13.4 1.7-4 3.5-10 5.5-18 1.6-7 5.4-14 11.4-21l7.5-9c5.2-6 8.6-11 10.5-15s2.9-9 2.9-13c0-2-.5-8-1.6-18-1-10-1.5-20-1.5-29 0-7 .6-12 1.9-17s3.6-10 7-14c3-4 7-8 13-10s13-3 21-3c3 0 6 0 9 1 3 0 7 1 12 3 4 2 8 4 11 7 4 3 7 8 10 13 2 6 4 12 5 20 1 5 1 10 2 17 0 6 1 10 1 13 1 3 1 7 2 12 1 4 2 8 4 11 2 4 4 8 7 12 3 5 7 10 11 16 9 10 16 21 20 32 5 10 8 23 8 36.9 0 6.9-1 13.6-3 20.1 2 0 3 .8 4 2.2s2 4.4 3 9.1l1 7.4c1 2.2 2 4.3 5 6.1 2 1.8 4 3.3 7 4.5 2 1 5 2.4 7 4.2 2 2 3 4.1 3 6.3 0 3.4-1 5.9-3 7.7-2 2-4 3.4-7 4.3-2 1-6 3-12 5.82-5 2.96-10 6.55-15 10.8l-10 8.51c-4 3.9-8 6.7-11 8.4-3 1.8-7 2.7-11 2.7l-7-.8c-8-2.1-13-6.1-16-12.2-16-1.94-29-2.9-37-2.9" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000"><title>macOS</title><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="345.1 36.9 482.9 482.9">
                  <title>Nintendo Switch</title>
                  <g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)">
                    <path d="M4485,8615.1c-481-86-868-442-990-910c-44-169-47-268-42-1579c3-1204,4-1232,24-1325c111-501,467-858,973-976   c66-15,150-18,691-21c560-4,618-3,633,12s16,208,16,2396c0,1622-3,2386-10,2400c-10,18-27,19-613,18   C4691,8629.1,4548,8626.1,4485,8615.1z M5390,6215.1v-2026l-407,5c-375,4-415,6-490,25c-322,83-561,331-628,654   c-22,101-22,2589-1,2688c60,281,255,514,518,619c132,53,193,59,621,60l387,1V6215.1z"/>
                    <path d="M4571,7630.1c-63-12-159-60-210-105c-105-91-157-220-149-372c4-79,9-100,41-164c47-97,118-168,215-216c67-33,84-37,171-40   c79-3,107,0,160,18c217,73,348,284,311,500C5067,7508.1,4823,7680.1,4571,7630.1z"/>
                    <path d="M6277,8624.1c-4-3-7-1087-7-2409c0-2181,1-2402,16-2408c27-10,803-6,899,4c406,46,764,293,959,660c25,47,58,126,75,175   c63,188,61,138,61,1575c0,1147-2,1318-16,1391c-99,521-496,914-1018,1004c-70,12-178,15-526,15   C6480,8631.1,6280,8628.1,6277,8624.1z M7345,6446.1c156-41,284-160,336-312c33-94,32-232-1-318c-61-158-181-269-335-310   c-250-65-516,86-589,334c-22,76-21,204,4,282C6835,6367.1,7095,6511.1,7345,6446.1z"/>
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="537.5 277.1 211.8 159.5" >
                  <title>Nintendo Wii U</title>
                  <g transform="translate(-5.8253916,-5.6213889)">
                      <path id="_56666168" d="M620.9,354.8c0,47.6,56.3,40.8,56.3,7.5v-78.8h-56.3    C620.9,283.5,620.9,354.8,620.9,354.8z"/>
                      <path id="_56603080" d="M543.4,404.8c0,23.5,16.2,37.5,40,37.5h135    c20.1,0,36.3-13.8,36.3-33.8v-98.7c0-12-8.9-25-20-25h-31.3V366c0,61.7-107.5,61.2-107.5,1.3v-83.7h-23.8    c-15.5,0-28.8,9.8-28.8,25L543.4,404.8L543.4,404.8z"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="featureSummary">
          <div className="container fullWidth">
            <div className="column left">
              <ElementOnScroll>
                <div className="text">
                  <h1>{t('A familiar but improved experience')}</h1>
                  <p>{t('We are careful to put any and all changes to the authentic game behind toggles, so that if desired you can play it in all of its 1998 glory.')}</p>
                </div>
              </ElementOnScroll>
            </div>
            <div className="column right">
              <ElementOnScroll>
                <div className="backgroundImage" style={{ backgroundImage: 'url("/screenshot_saria.jpg")' }}> </div>
              </ElementOnScroll>
            </div>
          </div>
        </section>
        <section className="direct">
          <div className="container">
            <div className="column">
              <h1>{t('Watch our latest direct')}</h1>
              <ElementOnScroll>
                <YoutubeVideo embedId="HrA4fOHXUFU" />
              </ElementOnScroll>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />

    </>
  );
};

export const getServerSideProps = async({ locale }: { locale: string }) => ({
  props: {
  ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Home;
