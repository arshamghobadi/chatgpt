import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
import { HiSun } from 'react-icons/hi2';
import { HiOutlineBolt } from 'react-icons/hi2';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className=" text-5xl font-bold mb-20">Chat GPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <HiSun className="h-6 w-6 " />
            <h2>Example</h2>
          </div>
          <div className=" space-y-2">
            <p className="infoText">
              Explain quantum computing in simple terms
            </p>
            <p className="infoText">
              Got any creative ideas for a 10 year olds birthday?
            </p>
            <p className="infoText">
              how do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <HiOutlineBolt className="h-6 w-6 " />
            <h2>Example</h2>
          </div>
          <div className=" space-y-2">
            <p className="infoText">
              Remembers what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <HiOutlineExclamationTriangle className="h-6 w-6 " />
            <h2>Example</h2>
          </div>
          <div className=" space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
