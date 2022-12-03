import Image from "next/image";
import Link from "next/link";
import React from "react";
import User from "../src/interfaces/User";

export default function UserCard({
  user,
  full,
}: {
  user: User;
  full?: boolean;
}) {
  return (
    <Link
      className="flex max-w-xs flex-col justify-start w-full gap-2 overflow-hidden rounded-xl bg-white/50 pb-4 text-slate-800 shadow-md hover:bg-white/20 mx-auto"
      href={`/user/${user.id}`}
    >
      <div className="relative h-32 max-h-32 bg-[#fcd4e1]">
        <Image
          src={`https://avatars.dicebear.com/api/open-peeps/${user.username}.svg`}
          fill
          sizes="100%"
          alt=""
        />
      </div>
      <h3 className="px-4 text-xl font-bold">
        {user.name} {!full && "→"}
      </h3>
      <div className="px-4 text-sm">
        <span className="font-bold">Username: </span>
        {user.username}
      </div>
      <div className="px-4 text-sm">
        <span className="font-bold">Email: </span>
        {user.email.toLowerCase()}
      </div>
      <div className="px-4 text-sm">
        <span className="font-bold">Phone: </span>
        {user.phone}
      </div>
      <div className="px-4 text-sm">
        <span className="font-bold">Website: </span>
        {user.website}
      </div>
      {full && (
        <>
          <div className="px-4 text-sm">
            <span className="font-bold">Address: </span>
            {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </div>
          <div className="px-4 text-sm">
            <span className="font-bold">Company: </span>
            {user.company.name}
          </div>
        </>
      )}
    </Link>
  );
}
