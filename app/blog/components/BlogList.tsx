import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  slug: string
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Card key={post.id} className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-xl text-slate-100">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-400 mb-2">{post.excerpt}</p>
            <p className="text-sm text-slate-500">
              {post.author} • {new Date(post.date).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

