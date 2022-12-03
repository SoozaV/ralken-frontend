import { GetServerSideProps } from "next";
import Link from "next/link";
import PhotoCard from "../../../../components/PhotoCard";
import UserCard from "../../../../components/UserCard";
import UserLayout from "../../../../components/UserLayout";
import Photo from "../../../interfaces/Photo";
import User from "../../../interfaces/User";
import { getUser, getUserPhotos } from "../../api/users";

function User({ user, userPhotos }: { user: User; userPhotos: Photo[] }) {
  return (
    <UserLayout title="Ralken Frontend | User Photos">
      <div className="container flex w-full flex-wrap justify-center px-4 py-8 mx-auto">
        <div className="basis-full sm:basis-[40%] md:basis-1/4">
          <div className="sticky top-4">
            <UserCard user={user} full />
            <Link
              href={`/user/${user.id}/posts`}
              className="mt-5 mb-5 sm:mb-0 flex max-w-xs justify-center gap-2 rounded-xl bg-green-700 py-2 align-middle text-slate-100 shadow-md hover:bg-green-800 mx-auto"
            >
              User Posts
            </Link>
          </div>
        </div>
        <div className="basis-full sm:basis-[60%] md:basis-1/2 lg:basis-2/3 xl:basis-3/4 flex justify-center sm:flex-none">
          <div className="grid grid-cols-1 px-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7 md:gap-5">
            {userPhotos.map((photo) => (
              <PhotoCard photo={photo} />
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
  const userPhotos = await getUserPhotos(userId);
  return {
    props: {
      user,
      userPhotos,
    },
  };
};
