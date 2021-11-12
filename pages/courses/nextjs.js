import { useRouter } from 'next/router';
import Link  from 'next/link';

const NextJs = () => {
	const router = useRouter();
	console.log('router', router);
	return (
		<div>
			<Link href="/courses/nextjs">
				<a>Welcome to Next.js with Ankita</a>
			</Link>
		</div>
	);
};

export default NextJs;
