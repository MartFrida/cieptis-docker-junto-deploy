import ContainerMain from "../components/ContainerMain";

const theme = {
  background: "bg-blue-50",
  primary: "bg-gradient-to-r from-blue-600 to-gray-950 text-white",
  secondary: "bg-indigo-500 text-white",
  text: "text-gray-800",
  hover: "hover:bg-gray-800 transition duration-200",
  accent: "bg-gray-800 hover:bg-gray-600 transition duration-200",
  buttonbg: "bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800",
};

export const Therapy = () => {
  return (
    <ContainerMain className={`${theme.background} p-6 mt-20 ${theme.text}`}>Rehabilitation and recovery services.
      <p>Acupunctura, Quiropracia, Digitopunctura, Masages Terapeutico, Vendaje en Neuro Muscular, Infrarojos, Masage Limfatico, Osteopatia, Meditacion, Terapia posparto, Terapia de Suepo Pelvico, Reiki,Shiaptcu, Ki Yong, Fisioterapia Deportiva, Embarazo Activo, Ejercisios Terapeuticos</p>
      <div className={`${theme.text} mt-8`}>
        <section id="runt">
          <h2 className={`${theme.accent} text-2xl text-white p-4 rounded-lg`}>Running</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nuestras instalaciones</li>
            <li>En tu casa</li>
            <li>En tu oficina</li>
            <li>Outdoor: en el parque, la playa…</li>
          </ul>
        </section>
        <section id="running">
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Running</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nuestras instalaciones</li>
            <li>En tu casa</li>
            <li>En tu oficina</li>
            <li>Outdoor: en el parque, la playa…</li>
          </ul>
        </section>
        <section id="run">
          <h2 className={`${theme.secondary} text-2xl p-4 rounded-lg`}>Running</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nuestras instalaciones</li>
            <li>En tu casa</li>
            <li>En tu oficina</li>
            <li>Outdoor: en el parque, la playa…</li>
          </ul>
        </section>

        <button className={`${theme.buttonbg}`}>Button</button>
      </div>
    </ContainerMain>
  )
}
