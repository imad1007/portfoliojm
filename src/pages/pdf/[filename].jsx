import { useRouter } from 'next/router';

const PdfViewer = () => {
  const router = useRouter();
  const { filename } = router.query; 
  
  const pdfUrl = `/pdf/${filename}.pdf`; 
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-screen">
        {filename ? (
          <iframe
            src={pdfUrl}
            className="w-full h-screen border rounded-lg shadow-lg"
            title="PDF Viewer"
          />
        ) : (
          <p className="text-center text-gray-500">Loading PDF...</p>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
