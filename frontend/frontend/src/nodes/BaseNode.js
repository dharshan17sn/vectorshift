import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, label, inputs = [], outputs = [], children, style = {} }) => {
  return (
    <div style={{
      background: '#1C2536',
      border: '1px solid #4A5568',
      borderRadius: '12px',
      padding: '12px 16px',
      minWidth: '200px',
      color: '#fff',
      fontSize: '13px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      ...style
    }}>
      {/* Header */}
      <div style={{
        fontWeight: '600',
        fontSize: '14px',
        marginBottom: '10px',
        paddingBottom: '8px',
        borderBottom: '1px solid #4A5568',
        color: '#90CDF4'
      }}>
        {label}
      </div>

      {/* Content */}
      <div>{children}</div>

      {/* Input Handles */}
      {inputs.map((input, i) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: inputs.length === 1 ? '50%' : `${((i + 1) / (inputs.length + 1)) * 100}%`,
            background: '#4299E1',
            width: '10px',
            height: '10px',
          }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, i) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: outputs.length === 1 ? '50%' : `${((i + 1) / (outputs.length + 1)) * 100}%`,
            background: '#48BB78',
            width: '10px',
            height: '10px',
          }}
        />
      ))}
    </div>
  );
};