"use client";

import * as Sentry from "@sentry/nextjs";

export default function BugReportButton() {
  const handleReportBug = () => {
    // Trigger the Sentry bug reporting dialog
    Sentry.showReportDialog({
      title: "Report a Bug",
      subtitle: "Help us improve by providing details about the issue.",
      subtitle2: "",
      labelComments: "What happened?",
      labelEmail: "Your email (optional)",
      successMessage: "Thank you for your feedback!",
    });
  };

  return (
    <button
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        padding: "12px 16px",
        backgroundColor: "#AD6CAA",
        color: "#fff",
        borderRadius: "8px",
        fontSize: "14px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        zIndex: 9999,
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleReportBug}
    >
      Report a Bug
    </button>
  );
}
