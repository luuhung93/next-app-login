import { getServerSession } from 'next-auth/next';
import { Profile } from '@/components/profile';
import { Login } from '@/components/auth/login';

export default async function Home() {
	const session = await getServerSession()
	return (
		<main className="min-h-screen p-24 text-center bg-gray-100">
			<h1 className='text-2xl mb-6 text-gray-700 font-semibold'>Test Next Login</h1>
			<div className='flex justify-center'>
				{session?.user ?
					<Profile user={session?.user} />
					:
					<Login />
				}
			</div>
		</main>
	)
}
