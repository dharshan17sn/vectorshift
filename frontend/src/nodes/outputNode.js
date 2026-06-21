import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode id={id} data={data} label="Output" inputs={[{ id: 'value' }]}>
      <label style={{ display: 'block', marginBottom: '6px' }}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
      </label>
      <label>
        Type:
        <select value={outputType} onChange={(e) => setOutputType(e.target.value)} style={inputStyle}>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};

const inputStyle = {
  display: 'block', width: '100%', marginTop: '4px',
  background: '#2D3748', border: '1px solid #4A5568',
  borderRadius: '6px', padding: '4px 8px', color: '#fff', fontSize: '12px'
};