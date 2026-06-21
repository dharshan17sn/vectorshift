import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Extract {{variable}} patterns — must be valid JS identifiers
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const found = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      if (!found.includes(match[1])) found.push(match[1]);
    }
    setVariables(found);
  }, [currText]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [currText]);

  // Calculate dynamic width based on longest line
  const lines = currText.split('\n');
  const longestLine = Math.max(...lines.map(l => l.length), 10);
  const nodeWidth = Math.min(Math.max(longestLine * 8 + 40, 200), 600);

  return (
    <div style={{
      background: '#1C2536',
      border: '1px solid #4A5568',
      borderRadius: '12px',
      padding: '12px 16px',
      width: `${nodeWidth}px`,
      color: '#fff',
      fontSize: '13px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      position: 'relative',
    }}>
      {/* Dynamic input handles for each {{variable}} */}
      {variables.map((varName, i) => (
        <Handle
          key={varName}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          style={{
            top: `${((i + 1) / (variables.length + 1)) * 100}%`,
            background: '#ED8936',
            width: '10px', height: '10px',
          }}
        >
          <div style={{
            position: 'absolute',
            left: '14px',
            top: '-8px',
            fontSize: '10px',
            color: '#ED8936',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}>
            {varName}
          </div>
        </Handle>
      ))}

      {/* Header */}
      <div style={{
        fontWeight: '600', fontSize: '14px', marginBottom: '10px',
        paddingBottom: '8px', borderBottom: '1px solid #4A5568', color: '#90CDF4'
      }}>
        Text
      </div>

      {/* Auto-resizing textarea */}
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        style={{
          width: '100%',
          background: '#2D3748',
          border: '1px solid #4A5568',
          borderRadius: '6px',
          padding: '6px 8px',
          color: '#fff',
          fontSize: '12px',
          resize: 'none',
          overflow: 'hidden',
          minHeight: '60px',
          outline: 'none',
          fontFamily: 'monospace',
        }}
        placeholder="Enter text with {{variables}}..."
      />

      {/* Show detected variables */}
      {variables.length > 0 && (
        <div style={{ marginTop: '6px', fontSize: '11px', color: '#A0AEC0' }}>
          Variables: {variables.map(v => (
            <span key={v} style={{
              background: '#744210', color: '#FBD38D', borderRadius: '4px',
              padding: '1px 6px', marginRight: '4px'
            }}>{v}</span>
          ))}
        </div>
      )}

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ background: '#48BB78', width: '10px', height: '10px' }}
      />
    </div>
  );
};