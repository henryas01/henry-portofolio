import { motion } from "motion/react";
import {
  Users,
  FileText,
  FolderOpen,
  TrendingUp,
  Award,
  Code,
} from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";

export default function DashboardComponent() {
  const stats = [
    {
      icon: Users,
      label: "Total Users",
      value: "1,234",
      change: "+12%",
      color: "cyan",
    },
    {
      icon: FileText,
      label: "Articles",
      value: "87",
      change: "+5%",
      color: "blue",
    },
    {
      icon: FolderOpen,
      label: "Projects",
      value: "42",
      change: "+8%",
      color: "cyan",
    },
    {
      icon: Award,
      label: "Certificates",
      value: "15",
      change: "+2",
      color: "blue",
    },
    {
      icon: Code,
      label: "Active Requests",
      value: "23",
      change: "+15%",
      color: "cyan",
    },
    {
      icon: TrendingUp,
      label: "Monthly Revenue",
      value: "$12.5K",
      change: "+18%",
      color: "blue",
    },
  ];

  const recentActivity = [
    {
      user: "John Doe",
      action: "submitted a new request",
      time: "5 minutes ago",
    },
    { user: "Jane Smith", action: "registered an account", time: "1 hour ago" },
    { user: "Mike Johnson", action: "completed payment", time: "2 hours ago" },
    { user: "Sarah Wilson", action: "viewed portfolio", time: "3 hours ago" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <ParallaxSection speed={0.2} className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[35rem] h-[35rem] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">
            Welcome back! Here&apos;s what&apos;s happening today.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-10 h-10 text-${stat.color}-400`} />
                <span className="text-sm text-green-400">{stat.change}</span>
              </div>
              <div>
                <p className="text-3xl mb-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-black/30 border border-cyan-500/10 hover:border-cyan-400/30 transition-colors"
                >
                  <p className="text-gray-300 mb-1">
                    <span className="text-cyan-400">{activity.user}</span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quick Actions
            </h2>
            <div className="space-y-3">
              {[
                "Add New Project",
                "Create Article",
                "Upload Certificate",
                "Review Requests",
                "Manage Users",
                "View Analytics",
              ].map((action) => (
                <button
                  key={action}
                  className="w-full p-4 rounded-lg bg-black/30 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all text-left"
                >
                  {action}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
