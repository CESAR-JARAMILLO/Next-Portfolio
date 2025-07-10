import posthog from "posthog-js"

// Only initialize PostHog on the client side
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: '2025-05-24',
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking
    debug: process.env.NODE_ENV === "development",
  });

  // Generate a unique visitor ID
  const visitorId = localStorage.getItem('portfolio_visitor_id') || 
    `visitor_${Math.random().toString(36).substr(2, 9)}`;
  
  localStorage.setItem('portfolio_visitor_id', visitorId);
  
  // Identify the user with basic properties
  posthog.identify(visitorId, {
    name: 'Portfolio Visitor',
    source: 'Portfolio Website',
    first_visit: new Date().toISOString(),
    user_type: 'portfolio_visitor'
  });
}

export default posthog;
