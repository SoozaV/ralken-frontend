import { GetServerSideProps } from "next";
import Link from "next/link";
import PostCard from "../../../../components/PostCard";
import UserCard from "../../../../components/UserCard";
import UserLayout from "../../../../components/UserLayout";
import Post from "../../../interfaces/Post";
import User from "../../../interfaces/User";
import { getUser, getUserPosts } from "../../api/users";

function User({ user, userPosts }: { user: User; userPosts: Post[] }) {
  return (
    <UserLayout title="Ralken Frontend | User Posts">
      <div className="container mx-auto flex w-full flex-wrap justify-center px-4 py-8">
        <div className="basis-full sm:basis-[40%] md:basis-1/4">
          <div className="sticky top-4">
            <UserCard user={user} full />
            <Link
              href={`/user/${user.id}/photos`}
              className="mx-auto mt-5 mb-5 flex max-w-xs justify-center gap-2 rounded-xl bg-green-700 py-2 align-middle text-slate-100 shadow-md hover:bg-green-800 sm:mb-0"
            >
              User Photos
            </Link>
          </div>
        </div>
        <div className="flex basis-full justify-center sm:flex-none sm:basis-[60%] md:basis-3/4">
          <div className="grid grid-cols-1 gap-7 px-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {userPosts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default User;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.params?.id as string;
  const user = await getUser(userId);
  const userPosts = await getUserPosts(userId);
  return {
    props: {
      user,
      userPosts,
    },
  };
};
