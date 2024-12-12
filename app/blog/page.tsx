import { Metadata } from 'next'
import BlogList from './components/BlogList'
import FeaturedPost from './components/FeaturedPosts'

export const metadata: Metadata = {
  title: 'Blog | Yeshwanth',
  description: 'Read the latest articles on web development, design, and technology.',
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt: "Explore the upcoming trends and technologies that will shape the web development landscape in 2024.",
    date: "2024-12-01",
    author: "Yeshwanth",
    slug: "future-of-web-development-2024",
  },
  {
    id: 2,
    title: "Mastering React Hooks: A Comprehensive Guide",
    excerpt: "Dive deep into React Hooks and learn how to use them effectively in your projects.",
    date: "2024-11-15",
    author: "Yeshwanth",
    slug: "mastering-react-hooks",
  },
  {
    id: 3,
    title: "Building Accessible Web Applications: Best Practices",
    excerpt: "Learn how to create web applications that are accessible to all users, regardless of their abilities.",
    date: "2024-10-30",
    author: "Yeshwanth",
    slug: "building-accessible-web-applications",
  },
  {
    id: 4,
    title: "The Power of Server-Side Rendering with Next.js",
    excerpt: "Discover how Server-Side Rendering can improve your web application's performance and SEO.",
    date: "2024-10-15",
    author: "Yeshwanth",
    slug: "power-of-server-side-rendering-nextjs",
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300 bg-slate-950 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <FeaturedPost post={featuredPost} />
        <BlogList posts={otherPosts} />
      </div>
    </div>
  )
}

