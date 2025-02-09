export default function PDFViewer() {
    return (
      <div className="w-full h-screen">
        <iframe
          src="/pdf/youssef.pdf"  // Place the PDF in the public folder
          className="w-full h-full"
        ></iframe>
      </div>
    );
  }
  