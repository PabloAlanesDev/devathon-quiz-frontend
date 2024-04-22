import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './styles.css';

const data = [
  { id: crypto.randomUUID(), name: 'John Doe', points: 12 },
  { id: crypto.randomUUID(), name: 'Jane Doe', points: 150 },
  { id: crypto.randomUUID(), name: 'Doe John', points: 6 },
];

const heightColumns = ['40%', '55%', '30%'];
const order = [2, 1, 3];

export default function ResultsPage() {
  return (
    <div className='container py-4 space-y-8'>
      <div className='h-[60vh] max-h-[500px] max-w-screen-md mx-auto grid grid-cols-3 finalists'>
        {data.map(({ name, points, id }, i) => (
          <motion.div
            key={id}
            className='flex flex-col gap-8 h-full items-end justify-end *:w-full'
          >
            <div className='flex-center flex-col gap-2 font-medium'>
              <Avatar className='size-14'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <motion.span
                className='text-center max-w-[150px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {name}
              </motion.span>
              <motion.div
                className='bg-purple-500 text-white px-2 py-1 rounded-full shadow-xl shadow-purple-400 flex-center w-fit gap-2'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  damping: 10,
                  stiffness: 100,
                }}
              >
                {points} <Star className='size-4' />
              </motion.div>
            </div>
            <motion.div
              className='bar'
              initial={{ height: 0 }}
              animate={{ height: heightColumns[i] }}
              transition={{
                delay: 0.2,
              }}
            >
              <motion.div
                className='bar-content'
                initial={{ scale: 0, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                }}
              >
                {order[i]}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className='flex-center-between font-medium max-w-screen-md mx-auto'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
        }}
      >
        <div className='flex items-center gap-4'>
          <Avatar className='size-14'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex justify-between flex-col'>
            <span className='text-muted-foreground font-medium text-sm'>
              #4
            </span>
            <span>lorem ipsum</span>
          </div>
        </div>
        <div className='bg-purple-500 text-white px-2 py-1 rounded-full shadow-xl shadow-purple-400 flex-center w-fit gap-2'>
          2 <Star className='size-4' />
        </div>
      </motion.div>
    </div>
  );
}
