import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => (
  <div style={{ padding: '10px', background: '#1A202C', borderBottom: '1px solid #2D3748' }}>
    <div style={{ color: '#90CDF4', fontWeight: '600', marginBottom: '8px', fontSize: '14px' }}>
      Pipeline Nodes
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <DraggableNode type='customInput' label='Input' />
      <DraggableNode type='llm' label='LLM' />
      <DraggableNode type='customOutput' label='Output' />
      <DraggableNode type='text' label='Text' />
      <DraggableNode type='math' label='Math' />
      <DraggableNode type='note' label='Note' />
      <DraggableNode type='filter' label='Filter' />
      <DraggableNode type='api' label='API Call' />
      <DraggableNode type='merge' label='Merge' />
    </div>
  </div>
);