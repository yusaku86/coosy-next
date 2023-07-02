import client from '@/contentful'
import { EntrySkeletonType } from 'contentful'
import { Key } from 'react';

export default function Home({ blogs } : any){
  return (
    <>
      {blogs.map((blog: EntrySkeletonType , index: Key) =>
        <div key={index}>
          <h1>{blog.fields.title}</h1>
          <p>{blog.fields.description}</p>
        </div>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  const blogs = await client.getEntries({
    content_type: "blogs",
    limit: 5,
    order: "sys.createdAt",
  });
  console.log(blogs);
  return {
    props: {
      blogs: blogs.items,
    }
  }
}
