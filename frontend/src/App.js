import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0F1117' }}>
      <div style={{ padding: '12px 20px', background: '#1A202C', borderBottom: '1px solid #2D3748' }}>
        <h1 style={{ margin: 0, fontSize: '20px', color: '#90CDF4', fontWeight: '700' }}>
          ⚡ VectorShift Pipeline Builder
        </h1>
      </div>
      <PipelineToolbar />
      <div style={{ flex: 1 }}>
        <PipelineUI />
      </div>
      <div style={{ padding: '12px', background: '#1A202C', borderTop: '1px solid #2D3748', display: 'flex', justifyContent: 'center' }}>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;