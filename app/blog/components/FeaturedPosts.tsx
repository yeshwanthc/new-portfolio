import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  slug: string
}

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <Card className="mb-12 bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-100">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-400 mb-4">{post.excerpt}</p>
        <p className="text-sm text-slate-500">
          {post.author} • {new Date(post.date).toLocaleDateString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

