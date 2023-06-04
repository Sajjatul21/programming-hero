import { CheckCircleIcon } from '@heroicons/react/24/solid';
const Feature = () => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-6 w-6 text-green-500" />
            <p className='ml-2'>Awesome Features</p>
        </div>
    );
};

export default Feature;