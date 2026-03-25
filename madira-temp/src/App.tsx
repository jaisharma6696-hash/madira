import { Website } from './components/Website';
import { CustomCursor } from './components/CustomCursor';
import { NoiseOverlay } from './components/NoiseOverlay';

export default function App() {
  return (
    <div className="min-h-screen">
      <NoiseOverlay />
      <CustomCursor />
      <Website />
    </div>
  );
}
