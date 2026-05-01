import Tel from '../../assets/icons/tel.svg';
import Banco from '../../assets/icons/banco.svg';
import Mapa from '../../assets/icons/mapa.svg';
import Calendario from '../../assets/icons/calendario.svg';

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
                <img src={Tel} alt="Teléfono" />
              </div>
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl text-center font">Llama al servicio</h2>
              <p className="text-gray-700 text-center">
             Número: 923884119
              </p>
              <p className="text-gray-700 text-center">
             Móvil: 2132838213
              </p>
              </div>
              </div>
            

            <div className="w-80 h-75 rounded-3xl overflow-hidden shadow-lg bg-white card">
              <div className="w-25 bg-button flex h-25 rounded-full justify-center circle">
                <img src={Banco} alt="Banco" />
              </div>
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl text-center font">Enviar mensaje</h2>
              <p className="text-gray-700 text-center">
             Número: 921567891
              </p>
              <p className="text-gray-700 text-center">
             Móvil: 2132838213
              </p>
              </div>
            </div>

            <div className="w-80 h-75 rounded-3xl overflow-hidden shadow-lg bg-white card">
              <div className="w-25 bg-button flex h-25 rounded-full justify-center circle">
                <img src={Mapa} alt="Mapa" />
              </div>
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl text-center font">Visítanos</h2>
              <p className="text-gray-700 text-center">
             Número: 1231232131
              </p>
              <p className="text-gray-700 text-center">
             Móvil: 2132838213
              </p>
              </div>
            </div>

            <div className="w-80 h-75 rounded-3xl overflow-hidden shadow-lg bg-white card">
              <div className="w-25 bg-button flex h-25 rounded-full justify-center circle">
                <img src={Calendario} alt="Calendario" />
              </div>
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl text-center font">Programa una cita</h2>
              <p className="text-gray-700 text-center">
             Número: 1231232131
              </p>
              <p className="text-gray-700 text-center">
             Móvil: 2132838213
              </p>
              </div>
            </div>  
   </div>
  
    </main>
  )
}
