import './App.css';

function App() {
  return (
    <div className='root'>
      <div className='title'>レッスン不要でスノボが上達！</div>
      <div className='imgs'>
        <img className='img' src='/cap_1.PNG' alt='cap1' />
        <img className='img' src='/cap_2.PNG' alt='cap2' />
      </div>
      <div className='title'>料金・サービス</div>
      <div>
        <li>
          お客様が映っているのスノーボードの追いどり動画を公式LINEに送っていただきます。
        </li>
        <li>一回投稿につき、300円(税込)かかります</li>
        <li>投稿された動画に対して、インストラクターがアドバイスを返します</li>
      </div>
      <div className='title'>登録はコチラから</div>
      <div className='imgs'>
        <img className='img' src='/qr.png' alt='qr' />
      </div>
    </div>
  );
}

export default App;
