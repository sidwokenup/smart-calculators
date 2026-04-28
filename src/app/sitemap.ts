import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com';

  const routes = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/health`, priority: 0.8 },
    { url: `${baseUrl}/money`, priority: 0.8 },
    
    // Health Calculators
    { url: `${baseUrl}/health/bmi-calculator`, priority: 0.7 },
    { url: `${baseUrl}/health/calorie-calculator`, priority: 0.7 },
    { url: `${baseUrl}/health/water-intake`, priority: 0.7 },
    { url: `${baseUrl}/health/ideal-weight`, priority: 0.7 },
    { url: `${baseUrl}/health/sleep-cycle`, priority: 0.7 },
    { url: `${baseUrl}/health/steps-calories`, priority: 0.7 },
    
    // Money Calculators
    { url: `${baseUrl}/money/emi-calculator`, priority: 0.7 },
    { url: `${baseUrl}/money/salary-hourly`, priority: 0.7 },
    { url: `${baseUrl}/money/savings-calculator`, priority: 0.7 },
    { url: `${baseUrl}/money/monthly-expense`, priority: 0.7 },
    { url: `${baseUrl}/money/budget-planner`, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route.priority,
  }));
}
