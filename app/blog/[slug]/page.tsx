import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Post {
  id: number
  title: string
  content: string
  date: string
  author: string
  slug: string
}

const blogPosts: Post[] = [
  {
    id: 1,
    title: "The Future of Web Development: What to Expect in 2025",
    content: `
      <p>As we approach 2024, the world of web development continues to evolve at a rapid pace. In this article, we'll explore some of the key trends and technologies that are likely to shape the landscape of web development in the coming year.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is set to play an even bigger role in web development. We can expect to see more AI-powered tools that assist developers in writing code, debugging, and even designing user interfaces. These tools will help streamline the development process and potentially reduce the time it takes to build complex web applications.</p>

      <h2>2. WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) has been gaining traction, and 2024 might be the year it truly goes mainstream. This technology allows high-performance applications to run in web browsers, opening up new possibilities for web-based software. We may see more desktop-quality applications making their way to the web, powered by WebAssembly.</p>

      <h2>3. Increased Focus on Web Accessibility</h2>
      <p>With growing awareness about the importance of digital inclusivity, web accessibility will become a top priority for developers and businesses alike. We'll likely see more tools and frameworks that make it easier to build accessible websites from the ground up, ensuring that web content is available to all users, regardless of their abilities.</p>

      <h2>4. The Rise of Edge Computing</h2>
      <p>Edge computing is set to revolutionize how we build and deploy web applications. By moving computation closer to the data source, edge computing can significantly reduce latency and improve performance. In 2024, we may see more frameworks and platforms that make it easier for developers to leverage edge computing in their web applications.</p>

      <h2>5. Progressive Web Apps (PWAs) Evolution</h2>
      <p>Progressive Web Apps have been around for a while, but they're continually evolving. In 2024, we might see PWAs becoming even more powerful, with better integration with device features and improved offline capabilities. This could further blur the line between web and native applications.</p>

      <h2>Conclusion</h2>
      <p>The future of web development looks exciting, with new technologies and methodologies emerging to make the web faster, more accessible, and more powerful. As developers, it's crucial to stay informed about these trends and continuously update our skills to keep up with the evolving landscape of web development.</p>
    `,
    date: "2024-12-16",
    author: "Yeshwanth",
    slug: "future-of-web-development-2025",
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: `${post.title} | Yeshwanth's Blog`,
    description: post.content.substring(0, 160),
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300 bg-slate-950 text-slate-300">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4 text-slate-100">{post.title}</h1>
        <p className="text-sm text-slate-400 mb-8">
          {post.author} 
        </p>
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  )
}

