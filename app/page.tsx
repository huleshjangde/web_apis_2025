import DocumentViewer from '@/components/bestData/DocumentViewer';
import ChatBot from '@/components/ChatBot';

const SplitLayout = ({ docUrl }: { docUrl: string }) => {
  return (
    <div className="flex h-screen">
      {/* Left side: Chatbot */}
      <div className="w-1/3 bg-gray-100 p-4">
        <ChatBot />
      </div>

      {/* Right side: Document Viewer */}
      <div className="w-2/3 p-4">
        <DocumentViewer fileUrl="https://podcasts.ceu.edu/sites/podcasts.ceu.edu/files/sample.doc" />
      </div>
    </div>
  );
};

export default SplitLayout;
