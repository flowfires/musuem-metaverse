import React, { useState } from 'react';
import './VirtualExhibit.css';

const exhibits = [
  {
    id: 'ancient',
    name: '古代文物展',
    cards: [
      { id: 1, name: '古代文物1', imageUrl: '/images/pic1.jpg', description: '这是古代文物1的描述' },
      { id: 2, name: '古代文物2', imageUrl: '/images/pic2.jpg', description: '这是古代文物2的描述' },
    ]
  },
  {
    id: 'modern',
    name: '近现代文物展',
    cards: [
      { id: 3, name: '近现代文物1', imageUrl: '/images/pic3.jpg', description: '这是近现代文物1的描述' },
    ]
  }
];

function VirtualExhibit() {
  const [selectedExhibit, setSelectedExhibit] = useState(exhibits[0].id);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleExhibitChange = (exhibitId) => {
    setSelectedExhibit(exhibitId);
    setSelectedCard(null); // 切换展区时关闭浮动卡片
  };

  const handleImageClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
  };

  const handleSpeak = () => {
    alert(`🔊 正在播放关于 ${selectedCard?.name} 的语音讲解`);
  };

  const currentExhibit = exhibits.find(exhibit => exhibit.id === selectedExhibit);

  return (
    <div className="virtual-exhibit">
      {/* 导航栏 */}
      <nav className="exhibit-nav">
        {exhibits.map((exhibit) => (
          <button
            key={exhibit.id}
            className={selectedExhibit === exhibit.id ? 'active' : ''}
            onClick={() => handleExhibitChange(exhibit.id)}
          >
            {exhibit.name}
          </button>
        ))}
      </nav>

      <h2 className="section-title">{currentExhibit.name}</h2>
      <p className="section-description">点击图片查看文物详情。</p>

      {/* 图片展示区域 */}
      <div className="exhibit-gallery">
        {currentExhibit.cards.map((card) => (
          <div key={card.id} className="image-container" onClick={() => handleImageClick(card)}>
            <img src={card.imageUrl} alt={card.name} />
          </div>
        ))}
      </div>

      {/* 遮罩层 + 浮动卡片 */}
      {selectedCard && (
        <div className="overlay" onClick={handleCloseCard}>
          <div className="virtual-exhibit-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseCard}>✖</button>
            <button className="speak-button" onClick={handleSpeak}>语音讲解</button>
            <div className="card-content">
              <img
                src={selectedCard.imageUrl}
                alt={selectedCard.name}
                onClick={() => (window.location.href = '/3d-exhibit')}
                className="card-image"
              />
              <div className="text-container">
                <h2>{selectedCard.name}</h2>
                <p>{selectedCard.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VirtualExhibit;
