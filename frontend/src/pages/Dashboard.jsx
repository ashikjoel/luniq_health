import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";

function Dashboard() {
  return (
    <Layout>
      <div>
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            🏥 Hospital AI Assistant
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Welcome! Select a service to continue.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ServiceCard
            icon="💬"
            title="Medical Chat"
            description="Ask healthcare-related questions and receive AI-assisted answers."
            path="/chat"
          />

          <ServiceCard
            icon="🖼️"
            title="Medical Image Analysis"
            description="Upload X-rays, CT scans, MRI images, wound photos, and ask questions."
            path="/image"
          />

          <ServiceCard
            icon="📄"
            title="Medical Report Analysis"
            description="Upload prescriptions, lab reports, discharge summaries, and ask questions."
            path="/pdf"
          />

        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;