import './App.css';

import appleTouchIcon from './images/favicon/apple-touch-icon.png';
import favicon32 from './images/favicon/favicon-32x32.png';
import favicon16 from './images/favicon/favicon-16x16.png';
import safariPinnedTab from './images/favicon/safari-pinned-tab.svg';

import cap1 from './images/cap_1.PNG';
import cap2 from './images/cap_2.PNG';
import qr from './images/qr.png';

function App() {
  return (
    <>
      <head>
        <meta charset='utf-8' />
        <link rel='apple-touch-icon' sizes='180x180' href={appleTouchIcon} />
        <link rel='icon' type='image/png' sizes='32x32' href={favicon32} />
        <link rel='icon' type='image/png' sizes='16x16' href={favicon16} />
        <link rel='mask-icon' href={safariPinnedTab} color='#5bbad5' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Web site created using create-react-app'
        />
        <link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
        <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        <title>スノボ動画アドバイスシステム</title>
      </head>

      <div className='root'>
        <div className='caption'>スノボ動画アドバイスシステム β</div>
        <div className='title'>レッスン不要でスノボが上達！</div>
        <div className='imgs'>
          <img className='img' src={cap1} alt='cap1' />
          <img className='img' src={cap2} alt='cap2' />
        </div>
        <div className='title'>料金・サービス</div>
        <div className='description'>
          <li>
            お客様が映っているスノーボードの追いどり動画を公式LINE
            Botに送っていただきます
          </li>
          <li>一回投稿につき、300円(税込)かかります</li>
          <li>投稿された動画に対して、解説とアドバイスを返します</li>
        </div>
        <div className='title'>登録はコチラから</div>
        <div className='imgs'>
          <img className='img' src={qr} alt='qr' />
        </div>
        <div className='linkBg'>
          <a href='https://lin.ee/vHeWHqf' target='_blank' rel='noreferrer'>
            https://lin.ee/vHeWHqf
          </a>
        </div>
      </div>
      <div className='footer'>
        <a
          className='footerLink'
          href='https://gintrick.com/'
          target='_blank'
          rel='noreferrer'
        >
          株式会社GinTrick
        </a>
        <div className='footerContent'>お問い合わせ: gin@gintrick.com</div>
      </div>
    </>
  );
}

export default App;
