export function CardIntegrantes() {
  return (
    <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 max-w-sm mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <img
          alt=""
          src="https://avatars.githubusercontent.com/u/155467088?v=4"
          className="size-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-medium text-white">Matheus Carvalho</h3>

          {/* CORREÇÃO AQUI: */}
          {/* Troquei 'space-y-1' por 'flex gap-3' para ficarem lado a lado */}
          <ul className="mt-1 flex gap-3 text-xs font-medium text-gray-300">
            <li>
              <a href="#" className="hover:text-white">Twitter</a>
            </li>

            <li>
              <a href="#" className="hover:text-white">GitHub</a>
            </li>

            <li>
              <a href="#" className="hover:text-white">Portfólio</a>
            </li>
          </ul>
        </div>
      </div>

      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="block rounded-lg border border-gray-700 bg-gray-900 p-4 hover:border-pink-600 transition-colors"
          >
            <strong className="font-medium text-white">Project A</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!
            </p>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg border border-gray-700 bg-gray-900 p-4 hover:border-pink-600 transition-colors"
          >
            <strong className="font-medium text-white">Project B</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!
            </p>
          </a>
        </li>
      </ul>
    </article>
  );
}