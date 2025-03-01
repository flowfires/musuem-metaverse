import React from 'react';
import { useState } from 'react';
import './VirtualExhibit.css';

const cards = [
  { id: 1, name: '文物1', imageUrl: '/images/pic1.jpg', description: '这是文物1的描述' },
  { id: 2, name: '文物2', imageUrl: '/images/pic2.jpg', description: '这是文物2的描述' },
];

function VirtualExhibitCard({ name, imageUrl, description, onEnter3D }) {
  const handleImageClick = () => {
    onEnter3D();  // 触发进入3D模式
  };

  return (
    <div className="virtual-exhibit-card">
      <h2>{name}</h2>
      <div 
        className="image-container"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      >
        <img src={imageUrl} alt={name} />
      </div>
      <p>{description}</p>
    </div>
  );
}

function ExhibitGallery() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const onEnter3D = () => {
    window.location.href = '/3d-exhibit';  // 假设后端接口通过 URL 跳转到 3D 页面
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const currentCard = cards[currentCardIndex];

  return (
    <div>
      <button onClick={handlePreviousCard}>上一卡片</button>
      <VirtualExhibitCard
        name={currentCard.name}
        imageUrl={currentCard.imageUrl}
        description={currentCard.description}
        onEnter3D={onEnter3D}
      />
      <button onClick={handleNextCard}>下一卡片</button>
    </div>
  );
}
function VirtualExhibit() {
  return (
    <div className="virtual-exhibit">
      <h2>虚拟展区</h2>
      <p>这里展示各种文物和历史场景，点击文物查看3d版。</p>
      <ExhibitGallery></ExhibitGallery>
    </div>
  );
}

export default VirtualExhibit;
