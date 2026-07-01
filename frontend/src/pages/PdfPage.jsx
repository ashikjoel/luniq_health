import Layout from "../components/Layout";

function PdfPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          📄 PDF Question Answering
        </h1>

        <p className="mt-2 text-gray-600">
          Upload a PDF and ask questions based on its content.
        </p>
      </div>
    </Layout>
  );
}

export default PdfPage;