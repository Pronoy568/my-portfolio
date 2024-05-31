import BlogCard from "@/components/Home/Blogs/BlogCard";

export interface MyBlogs {
  _id: string;
  title: string;
  image: string;
  description: string;
  link: string;
}
export interface MyBlogsCardProps {
  item: MyBlogs;
}

const Blog = async () => {
  const res = await fetch(
    `https://my-portfolio-server-pi.vercel.app/api/v1/blogs`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: MyBlogs[] = await res.json();
  return (
    <>
      <div id="blogs" className="py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-center text-white font-semibold text-4xl mb-3 snap-center">
            MY <span className="text-[#5ee4ae]">BLOGS</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {data?.map((blog: MyBlogs) => (
              <BlogCard item={blog} key={blog._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
