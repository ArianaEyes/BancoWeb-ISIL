import Tel from '../../../public/icons/tel.svg?react';
import Carta from '../../../public/icons/carta.svg?react';
import Mapa from '../../../public/icons/mapa.svg?react';
import Calendario from '../../../public/icons/calendario.svg?react';

export const Main = () => {
  return (
    <main className="w-full">
            <div className="title-main">
                <h1 className="font-co">Get</h1>
                <h1 className="font-cg">In Touch</h1>
                <p>Transform your space with our reliable and eco-friendly cleaning services. Let us handle the mess while you enjoy a pristine environment.</p>
            </div>

            <div className="w-380 mx-auto flex justify-around px-4 h-75 cards">
              <div className="w-80 h-75 rounded-3xl overflow-hidden shadow-lg bg-white card">
              <div className="w-25 bg-button flex h-25 rounded-full justify-center circle">
                <Tel className="w-15 h-15 " />
              </div>
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl text-center font">The Coldest Sunset</h2>
              <p className="text-gray-700 text-center">
             numero: 1231232131
              </p>
              <p className="text-gray-700 text-center">
             movil: 2132838213
              </p>
              </div>
            </div>

            <div className="w-80 h-75 rounded-3xl overflow-hidden shadow-lg bg-white card">
              <div className="w-25 bg-button flex h-25 rounded-full justify-center circle">
                <Carta className="w-15 h-15 " />
              </div>
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl text-center font">The Coldest Sunset</h2>
              <p className="text-gray-700 text-center">
             numero: 1231232131
              </p>
              <p className="text-gray-700 text-center">
             movil: 2132838213
              </p>
              </div>
            </div>

            <div className="w-80 h-75 rounded-3xl overflow-hidden shadow-lg bg-white card">
              <div className="w-25 bg-button flex h-25 rounded-full justify-center circle">
                <Mapa className="w-15 h-15 " />
              </div>
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl text-center font">The Coldest Sunset</h2>
              <p className="text-gray-700 text-center">
             numero: 1231232131
              </p>
              <p className="text-gray-700 text-center">
             movil: 2132838213
              </p>
              </div>
            </div>

            <div className="w-80 h-75 rounded-3xl overflow-hidden shadow-lg bg-white card">
              <div className="w-25 bg-button flex h-25 rounded-full justify-center circle">
                <Calendario className="w-15 h-15" />
              </div>
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl text-center font">The Coldest Sunset</h2>
              <p className="text-gray-700 text-center">
             numero: 1231232131
              </p>
              <p className="text-gray-700 text-center">
             movil: 2132838213
              </p>
              </div>
            </div>


            </div>

            
          
    </main>
  )
}
