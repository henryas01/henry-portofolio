import { motion } from "motion/react";
import { Check, X, Eye } from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";

export default function AdminRequests() {
  const requests = [
    {
      id: 1,
      customer: "John Doe",
      email: "john@example.com",
      appType: "Web App",
      description:
        "E-commerce platform with payment integration and inventory management",
      budget: "$5,000 - $10,000",
      date: "2023-11-20",
      status: "pending",
    },
    {
      id: 2,
      customer: "Jane Smith",
      email: "jane@example.com",
      appType: "Android App",
      description:
        "Fitness tracking app with social features and workout plans",
      budget: "$8,000 - $15,000",
      date: "2023-11-19",
      status: "pending",
    },
    {
      id: 3,
      customer: "Mike Johnson",
      email: "mike@example.com",
      appType: "Custom Software",
      description:
        "CRM system for managing customer relationships and sales pipeline",
      budget: "$15,000+",
      date: "2023-11-18",
      status: "pending",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <ParallaxSection speed={0.2} className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-[35rem] h-[35rem] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Application Requests
          </h1>
          <p className="text-gray-400">
            Review and manage customer application requests
          </p>
        </motion.div>

        {/* Requests Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="space-y-4">
            {requests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Request Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl text-cyan-400">
                        {request.customer}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                        {request.appType}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2">{request.email}</p>
                    <p className="text-gray-300 mb-3">{request.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span>
                        Budget:{" "}
                        <span className="text-cyan-400">{request.budget}</span>
                      </span>
                      <span>Date: {request.date}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-2">
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-all">
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg hover:shadow-green-500/50 transition-all">
                      <Check className="w-4 h-4" />
                      <span>Approve</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:shadow-lg hover:shadow-red-500/50 transition-all">
                      <X className="w-4 h-4" />
                      <span>Reject</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Empty State (if no requests) */}
        {requests.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">
              No pending requests at the moment
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
