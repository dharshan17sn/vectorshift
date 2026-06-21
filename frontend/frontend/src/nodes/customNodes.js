import { useState } from 'react';
import { BaseNode } from './BaseNode';

const inputStyle = {
  display: 'block', width: '100%', marginTop: '4px',
  background: '#2D3748', border: '1px solid #4A5568',
  borderRadius: '6px', padding: '4px 8px', color: '#fff', fontSize: '12px'
};

// 1. Math Node
export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');
  return (
    <BaseNode id={id} data={data} label="Math"
      inputs={[{ id: 'a' }, { id: 'b' }]}
      outputs={[{ id: 'result' }]}>
      <label>
        Operation:
        <select value={operation} onChange={(e) => setOperation(e.target.value)} style={inputStyle}>
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (−)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
        </select>
      </label>
    </BaseNode>
  );
};

// 2. Note Node
export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');
  return (
    <BaseNode id={id} data={data} label="Note" style={{ background: '#2D3748', minWidth: '160px' }}>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note..."
        rows={3}
        style={{ ...inputStyle, resize: 'vertical' }}
      />
    </BaseNode>
  );
};

// 3. Filter Node
export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');
  return (
    <BaseNode id={id} data={data} label="Filter"
      inputs={[{ id: 'input' }]}
      outputs={[{ id: 'true' }, { id: 'false' }]}>
      <label>
        Condition:
        <input type="text" value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g. value > 10"
          style={inputStyle} />
      </label>
    </BaseNode>
  );
};

// 4. API Node
export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [method, setMethod] = useState(data?.method || 'GET');
  return (
    <BaseNode id={id} data={data} label="API Call"
      inputs={[{ id: 'body' }]}
      outputs={[{ id: 'response' }]}>
      <label style={{ display: 'block', marginBottom: '6px' }}>
        URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com" style={inputStyle} />
      </label>
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)} style={inputStyle}>
          <option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option>
        </select>
      </label>
    </BaseNode>
  );
};

// 5. Merge Node
export const MergeNode = ({ id, data }) => {
  const [separator, setSeparator] = useState(data?.separator || ', ');
  return (
    <BaseNode id={id} data={data} label="Merge"
      inputs={[{ id: 'input1' }, { id: 'input2' }]}
      outputs={[{ id: 'merged' }]}>
      <label>
        Separator:
        <input type="text" value={separator}
          onChange={(e) => setSeparator(e.target.value)}
          style={inputStyle} />
      </label>
    </BaseNode>
  );
};