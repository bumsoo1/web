import React, { useState } from 'react';

function TutorialCard({ tutorial, onSelect, onSave, isSaved }) {
  return (
    <div 
      onClick={() => onSelect(tutorial)}
      className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition"
    >
      <h3 className="text-lg font-bold">{tutorial.title}</h3>
      <p>제작자: {tutorial.creator}</p>
      <p>주제: {tutorial.topic}</p>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onSave(tutorial);
        }}
        className="mt-2 text-sm text-blue-500 hover:underline"
      >
        {isSaved ? '💾 저장됨' : '☆ 찜하기'}
      </button>
    </div>
  );
}

export default function TutorialListPage() {
  const [tutorials] = useState([
    { id: 1, title: 'React로 TODO 앱 만들기', creator: '코딩가이', topic: 'React' },
    { id: 2, title: '파이썬으로 데이터 분석', creator: 'Data왕', topic: 'Python' },
    { id: 3, title: 'AI 모델 기초', creator: 'AI마스터', topic: 'AI' },
  ]);

  const [filterTopic, setFilterTopic] = useState('');
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [savedTutorials, setSavedTutorials] = useState([]);

  const filtered = tutorials.filter(t => 
    filterTopic === '' || t.topic === filterTopic
  );

  const toggleSave = (tutorial) => {
    setSavedTutorials(prev =>
      prev.some(t => t.id === tutorial.id)
        ? prev.filter(t => t.id !== tutorial.id)
        : [...prev, tutorial]
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">코딩 튜토리얼 추천</h1>

      <select 
        value={filterTopic} 
        onChange={(e) => setFilterTopic(e.target.value)} 
        className="mb-4 p-2 border"
      >
        <option value="">전체 보기</option>
        <option value="React">React</option>
        <option value="Python">Python</option>
        <option value="AI">AI</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(t => (
          <TutorialCard 
            key={t.id}
            tutorial={t}
            onSelect={setSelectedTutorial}
            onSave={toggleSave}
            isSaved={savedTutorials.some(st => st.id === t.id)}
          />
        ))}
      </div>

      {selectedTutorial && (
        <div className="mt-6 p-4 border-t">
          <h2 className="text-xl font-semibold">선택한 튜토리얼</h2>
          <p>제목: {selectedTutorial.title}</p>
          <p>제작자: {selectedTutorial.creator}</p>
          <p>주제: {selectedTutorial.topic}</p>
        </div>
      )}
    </div>
  );
}
