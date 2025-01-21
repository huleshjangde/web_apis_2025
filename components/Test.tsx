import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import '@cyntler/react-doc-viewer/dist/index.css';

const Test = () => {
  const docs = [
    {
      uri: 'https://zhymzpncibzsfyqxutct.supabase.co/storage/v1/object/sign/files/pdfs/187a0e3a-f432-4680-8504-092027a77185/SIH2023 College Idea Presentation.pptx?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9wZGZzLzE4N2EwZTNhLWY0MzItNDY4MC04NTA0LTA5MjAyN2E3NzE4NS9TSUgyMDIzIENvbGxlZ2UgSWRlYSBQcmVzZW50YXRpb24ucHB0eCIsImlhdCI6MTczNzQ0MTA3NiwiZXhwIjoyNzM3NDQxMDgzfQ.lPPpzq5s5vBLDs4zXnlrw7VC0D_C4O36Oce9XutxqfI',
    },
  ];

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default Test;
