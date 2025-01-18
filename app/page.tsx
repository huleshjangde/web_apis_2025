import ScrollTracker from '@/components/ScrollTracker';

const SplitLayout = ({ docUrl }: { docUrl: string }) => {
  return (
    <div className="flex h-screen">
      <ScrollTracker />
    </div>
  );
};

export default SplitLayout;
