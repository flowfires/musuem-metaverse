import React, { useState } from 'react';
import './AdminPanel.css';

function AdminPanel() {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({ name: '', description: '', imageUrl: '' });

  const handleAddCard = () => {
    setCards([...cards, newCard]);
    setNewCard({ name: '', description: '', imageUrl: '' }); // 清空输入框
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="admin-panel">
      <h2>管理文物卡片</h2>
      
      <div>
        <input 
          type="text" 
          name="name" 
          value={newCard.name} 
          onChange={handleInputChange} 
          placeholder="文物名称" 
        />
        <textarea 
          name="description" 
          value={newCard.description} 
          onChange={handleInputChange} 
          placeholder="文物描述" 
        />
        <input 
          type="text" 
          name="imageUrl" 
          value={newCard.imageUrl} 
          onChange={handleInputChange} 
          placeholder="文物图片URL" 
        />
        <button onClick={handleAddCard}>添加文物</button>
      </div>

      <h3>文物卡片列表</h3>
      <div className="card-list">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h4>{card.name}</h4>
            <p>{card.description}</p>
            <img src={card.imageUrl} alt={card.name} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
