import { Play } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Sunday Service - February 2, 2026",
    description: "Join us for an inspiring message about faith and community",
    thumbnail: "https://images.unsplash.com/photo-1505427214476-47e71e07abfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwY29uZ3JlZ2F0aW9ufGVufDF8fHx8MTc3MDAwNzE5MHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Worship Night - January 2026",
    description: "Experience powerful worship and praise",
    thumbnail: "https://images.unsplash.com/photo-1745852738233-bbd0df06c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzcwMDE0MzY1fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Community Outreach Event",
    description: "See how we're serving our local community",
    thumbnail: "https://images.unsplash.com/photo-1581961562828-cd1663ac274e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBmZWxsb3dzaGlwfGVufDF8fHx8MTc3MDAxNDM2NXww&ixlib=rb-4.1.0&q=80&w=400"
  }
];

export function VideosSection() {
  return (
    <section id="videos" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">Watch Our Videos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto dark:text-slate-400">
            Catch up on recent sermons, worship services, and special events
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <Card className="overflow-hidden dark:bg-slate-800 dark:border-slate-700">
            <CardContent className="p-0">
              <div className="aspect-video bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Featured Church Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 dark:text-white">Latest Sunday Service</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Watch our most recent service and be blessed by the message
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="mb-1 dark:text-white">{video.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            View All Videos on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}