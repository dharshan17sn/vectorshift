import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => (
  <BaseNode
    id={id} data={data} label="LLM"
    inputs={[{ id: 'system' }, { id: 'prompt' }]}
    outputs={[{ id: 'response' }]}
  >
    <p style={{ margin: 0, fontSize: '12px', color: '#A0AEC0' }}>
      Language Model node. Connect a system prompt and user prompt.
    </p>
  </BaseNode>
);