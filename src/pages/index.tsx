import { GetServerSideProps } from "next";
import UserCard from "../../components/UserCard";
import UserLayout from "../../components/UsersLayout";
import Users from "../interfaces/Users";
import { getUsers } from "./api/users";

const Home = ({ users }: Users) => {
  return (
    <UserLayout title="Ralken Frontend">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 pt-8 mx-auto">
        <div className="grid grid-cols-1 gap-5 sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await getUsers();
  return {
    props: {
      users,
    },
  };
};
