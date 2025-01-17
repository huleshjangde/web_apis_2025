'use client';
import { useState } from 'react';

const DocumentViewer = ({
  fileUrl,
  pageNumber,
}: {
  fileUrl: string;
  pageNumber?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(pageNumber || 1);

  // Construct the URL with the page number query (Google Docs doesn't support fragment navigation)
  const embedUrl = pageNumber
    ? `https://docs.google.com/gview?url=${fileUrl}&embedded=true&page=${pageNumber}`
    : `https://docs.google.com/gview?url=${fileUrl}&embedded=true`;

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Update the iframe URL with the new page number
    window.location.href = `#${page}`;
  };

  return (
    <div className="h-screen w-full">
      <div className="flex justify-between p-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1}>
          Previous
        </button>
        <button onClick={() => goToPage(currentPage + 1)}>Next</button>
      </div>

      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Document Viewer"
      />
    </div>
  );
};

export default DocumentViewer;
