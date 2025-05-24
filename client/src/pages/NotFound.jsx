import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div className='flex justify-center items-center min-h-[80vh] flex-col'>
			<h1>Sorry page is not found!</h1>
			<Link to='/' className='uppercase mt-8'>Go to homepage!</Link>

		</div>
	)
}
