import { motion } from "motion/react";
import { Plus, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";
import Link from "next/link";
export default function CustomerDashboardComponent() {
  const requests = [
    {
      id: 1,
      title: "E-Commerce Platform",
      type: "Web App",
      status: "in-progress",
      date: "2023-11-15",
      budget: "$8,000",
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      type: "Android App",
      status: "approved",
      date: "2023-11-10",
      budget: "$12,000",
    },
    {
      id: 3,
      title: "CRM System",
      type: "Custom Software",
      status: "pending",
      date: "2023-11-20",
      budget: "$15,000",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case "in-progress":
        return <AlertCircle className="w-5 h-5 text-blue-400" />;
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500/20 text-green-400";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400";
      case "in-progress":
        return "bg-blue-500/20 text-blue-400";
      case "rejected":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Dashboard
          </h1>
          <p className="text-gray-400">
            Track your application requests and project status
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Requests", value: "3", icon: AlertCircle },
            { label: "Approved", value: "1", icon: CheckCircle },
            { label: "In Progress", value: "1", icon: Clock },
            { label: "Pending", value: "1", icon: Clock },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mb-3" />
              <p className="text-3xl mb-1 text-cyan-400">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* New Request Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link
            href="/customer/request"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            <Plus className="w-5 h-5" />
            <span>Submit New Request</span>
          </Link>
        </motion.div>

        {/* Requests List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Requests
          </h2>

          <div className="space-y-4">
            {requests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl text-cyan-400">{request.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${getStatusColor(
                          request.status
                        )}`}
                      >
                        {request.status.replace("-", " ")}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span>
                        Type:{" "}
                        <span className="text-gray-300">{request.type}</span>
                      </span>
                      <span>
                        Budget:{" "}
                        <span className="text-cyan-400">{request.budget}</span>
                      </span>
                      <span>Date: {request.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(request.status)}
                    <button className="px-4 py-2 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Empty State */}
        {requests.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl mb-6">
              You haven&apos;t submitted any requests yet
            </p>
            <Link
              href="/customer/request"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              <Plus className="w-5 h-5" />
              <span>Create Your First Request</span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
