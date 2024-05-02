import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Timer } from 'lucide-react';

const themes = [
  'bg-purple-400 border-purple-500',
  'bg-orange-400 border-orange-500',
  'bg-cyan-400 border-cyan-500',
  'bg-pink-400 border-pink-500',
].sort(() => Math.random() - 0.5);

const Option = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) => (
  <button
    className={`hover:outline hover:outline-4  border-b-4 rounded-2xl text-white text-xl p-4 ${theme}`}
  >
    {children}
  </button>
);

export default function QuizPage() {
  return (
    <div className='container size-screen py-4 grid grid-rows-[auto,1fr] gap-4'>
      <div className='flex-center-between'>
        <div className='flex -space-x-4 rtl:space-x-reverse'>
          {[...Array(4)].map((_, i) => (
            <Avatar key={i} className='border-2 border-purple-500'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div>
          <span className='flex-center-between text-lg bg-red-300 px-2 gap-2 rounded-full text-red-700'>
            30
            <Timer className='size-5' />
          </span>
        </div>
      </div>
      <div className='*:max-w-screen-md *:mx-auto *:w-full flex flex-col gap-8'>
        <Skeleton className='h-full rounded-lg max-h-[350px]' />
        <p className='text-center nunito-bold text-2xl md:text-3xl'>
          ¿Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
          dolorem?
        </p>
        <div className='grid grid-cols-2  gap-4 text-base *:truncate'>
          {[...Array(4)].map((_, i) => (
            <Option key={i} theme={themes[i]}>
              Lorem ipsum dolor sit amet
            </Option>
          ))}
        </div>
      </div>
    </div>
  );
}
