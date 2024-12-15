import { Metadata } from 'next';
import BlogList from './components/BlogList';
import FeaturedPost from './components/FeaturedPosts';

export const metadata: Metadata = {
  title: 'Blog | Yeshwanth',
  description: 'Read the latest articles on web development, design, and technology.',
};

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the upcoming trends and technologies that will shape the web development landscape in 2024.',
    date: '2024-12-01',
    author: 'Yeshwanth',
    slug: 'future-of-web-development-2024',
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
  },
  {
    id: 2,
    title: 'Mastering React Hooks: A Comprehensive Guide',
    excerpt: 'Dive deep into React Hooks and learn how to use them effectively in your projects.',
    date: '2024-11-15',
    author: 'Yeshwanth',
    slug: 'mastering-react-hooks',
    content: `
      <p>React Hooks revolutionized how we manage state and side effects in React. From basics like <code>useState</code> and <code>useEffect</code> to advanced patterns using custom hooks, this guide explores practical examples for dynamic forms, API integration, and performance optimizations in React applications.</p>

      <h2>Why React Hooks?</h2>
      <p>Hooks provide a simpler and more intuitive way to write components. They eliminate the need for class components and make code easier to understand and maintain.</p>

      <h2>Common Hooks</h2>
      <ul>
        <li><strong>useState:</strong> Manage state in functional components.</li>
        <li><strong>useEffect:</strong> Handle side effects like fetching data or updating the DOM.</li>
        <li><strong>useContext:</strong> Access context values without wrapping components in <code>Consumer</code>.</li>
      </ul>

      <h2>Custom Hooks</h2>
      <p>Custom hooks allow you to encapsulate reusable logic, making your code more modular and readable.</p>

      <h2>Conclusion</h2>
      <p>Mastering React Hooks is essential for modern React development. They simplify state management, enhance code reusability, and improve performance. Dive in and start exploring the power of Hooks in your projects.</p>
    `,
  },
  {
    id: 3,
    title: 'Building Accessible Web Applications: Best Practices',
    excerpt: 'Learn how to create web applications that are accessible to all users, regardless of their abilities.',
    date: '2024-10-30',
    author: 'Yeshwanth',
    slug: 'building-accessible-web-applications',
    content: `
      <p>Accessibility is crucial for reaching a wider audience. This blog covers WCAG standards, ARIA roles, and tips for building accessible forms, navigation, and interactive elements.</p>

      <h2>Why Accessibility Matters</h2>
      <p>Accessible web applications ensure inclusivity and compliance with legal standards like ADA and WCAG.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Use semantic HTML elements like <code>header</code>, <code>nav</code>, and <code>footer</code>.</li>
        <li>Provide alternative text for images.</li>
        <li>Ensure sufficient color contrast for text and background.</li>
        <li>Test with screen readers and keyboard navigation.</li>
      </ul>

      <h2>Tools</h2>
      <p>Leverage tools like Lighthouse, Axe, and WAVE to identify and fix accessibility issues.</p>

      <h2>Conclusion</h2>
      <p>Building accessible web applications is not just ethical but also a smart business move. It improves user experience and expands your audience reach.</p>
    `,
  },
  {
    id: 4,
    title: 'The Power of Server-Side Rendering with Next.js',
    excerpt: 'Discover how Server-Side Rendering can improve your web application\'s performance and SEO.',
    date: '2024-10-15',
    author: 'Yeshwanth',
    slug: 'power-of-server-side-rendering-nextjs',
    content: `
      <p>Server-Side Rendering (SSR) is a powerful feature of Next.js that boosts performance and SEO. Learn how to use SSR to render dynamic content on the server, improve loading times, and enhance the overall user experience.</p>

      <h2>Benefits of SSR</h2>
      <ul>
        <li>Improved SEO as search engines can index server-rendered pages better.</li>
        <li>Faster initial load times for users.</li>
        <li>Dynamic content generation without compromising performance.</li>
      </ul>

      <h2>Implementing SSR</h2>
      <p>Next.js makes SSR straightforward with its <code>getServerSideProps</code> API. This function fetches data at request time and renders the page on the server.</p>

      <h2>Conclusion</h2>
      <p>Leveraging SSR in your Next.js applications can significantly enhance performance and user experience. Start integrating SSR into your projects today!</p>
    `,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300 bg-slate-950 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <FeaturedPost post={featuredPost} />
        <BlogList posts={otherPosts} />
      </div>
    </div>
  );
}

