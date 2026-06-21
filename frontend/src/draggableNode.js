export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));
    event.dataTransfer.effectAllowed = 'move';
    event.target.style.cursor = 'grabbing';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
      style={{
        cursor: 'grab',
        padding: '8px 16px',
        background: '#2D3748',
        border: '1px solid #4A5568',
        borderRadius: '8px',
        color: '#E2E8F0',
        fontSize: '13px',
        fontWeight: '500',
        userSelect: 'none',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = '#4A5568'}
      onMouseLeave={(e) => e.currentTarget.style.background = '#2D3748'}
    >
      {label}
    </div>
  );
};