import Layout from "../components/Layout";

function ImagePage() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          🖼️ Image Question Answering
        </h1>

        <p className="mt-2 text-gray-600">
          Upload an image and ask questions about it.
        </p>
      </div>
    </Layout>
  );
}

export default ImagePage;