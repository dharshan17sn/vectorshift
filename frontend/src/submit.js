import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) throw new Error('Server error');

      const data = await response.json();

      alert(
        `✅ Pipeline Analysis\n\n` +
        `📊 Nodes: ${data.num_nodes}\n` +
        `🔗 Edges: ${data.num_edges}\n` +
        `🔄 Is DAG: ${data.is_dag ? 'Yes ✅' : 'No ❌'}`
      );
    } catch (error) {
      alert('❌ Error: Could not connect to backend.\nMake sure the backend is running on port 8000.');
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={{
        padding: '10px 32px',
        background: 'linear-gradient(135deg, #4299E1, #3182CE)',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(66,153,225,0.4)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      🚀 Submit Pipeline
    </button>
  );
};