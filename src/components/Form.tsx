


export default function Form() {

  const base = "bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24";
  let sessao = "bg-gray-100 flex bg-local";
  return (
    <section className={sessao} >
      <div className={base}>
        <form>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Nome*
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="nome" type="text" placeholder="Digite seu nome completo" required />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  E-mail*
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="email" type="email" placeholder="Fulano@dominio.com.br" required />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Mensagem
                </label>
                <textarea className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="msg" placeholder="Deixe sua mensagem..." />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Sexo
                </label>
                <div>
                  <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" >
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Telefone
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-2 px-4 mb-3" type="text" placeholder="(00) 0 0000-0000" required />
              </div>
              <div className="md:w-1/2 px-3 grid-flow-col">
                <input type='checkbox' className="mr-2 bg-gray-200" />
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Receber E-mail
                </label>
                <div>
                  <input type='checkbox' className="mr-2 bg-gray-200" />
                  <label className="uppercase 
                  tracking-wide 
                  text-black 
                  text-xs 
                  font-bold 
                  mb-2" >
                    Receber Um presente
                  </label>
                </div>
                <div>
                  <input type='checkbox' className="mr-2 bg-gray-200" />
                  <label className="uppercase 
                  tracking-wide 
                  text-black 
                  text-xs 
                  font-bold mb-2" >
                    Receber Telefonema
                  </label>
                </div>
              </div>
            </div>
            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button className=" bg-gray-900
                 text-white 
                 font-bold
                  py-2 px-4
                   border-b-4
                    hover:border-b-2
                     border-gray-500
                      hover:border-gray-100 
                      rounded-full">
                  Enviar
                </button>
              </div>
              <div className="md:w-auto px-3">
                <button className=" bg-red-900
                 text-white 
                 font-bold 
                 py-2 
                 px-4 
                 border-b-4
                  hover:border-b-2
                   border-gray-500
                    hover:border-gray-100
                     rounded-full"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
} 