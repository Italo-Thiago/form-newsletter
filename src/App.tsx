import From from "./components/From";

function App() {
	return (
		<div className="bg-white min-h-screen w-full flex flex-col items-center justify-center">
			<h1 className="font-bold text-[2rem] text-black">Inscreva-se</h1>
			<p className="text-black">
				Assine nossa Newslatter e mantenha-se informado
			</p>
			<div className="w-96 mt-4 bg-stone-200 px-4 py-3 border-2 border-black shadow-s">
				<From />
			</div>
			<p className="text-slate-950 text-xs w-96 mt-2 text-center">
				Ao se inscrever, você passará a receber os nossos e-mails com as
				melhores dias, novidades e ofertas.
			</p>
		</div>
	);
}

export default App;
