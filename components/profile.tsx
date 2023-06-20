"use client"
import { signOut } from "next-auth/react"

export const Profile = ({ user }: any) => {
    return (
        <div className="rounded-2xl bg-gray-800 px-8 py-10 text-center">
            <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={user.image} alt={user.name} />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{user.name}</h3>
            <p className="text-sm leading-6 text-gray-400">{user.email}</p>
            <p className="mt-6 text-xs cursor-pointer" onClick={() => signOut()}>LogOut</p>
        </div>
    )
}