import React from 'react';

function SwapiApp() {
    // Классы Bootstrap (navbar, container, col-md-6, card) заменены на Tailwind
    return (
        <div className="min-h-[80vh]">

            {/* <nav> - Простой хедер в Tailwind */}
            <nav className="bg-gray-800 p-3 shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <a className="text-2xl font-bold text-amber-300" href="#">
                        SWAPI Explorer 🚀
                    </a>
                </div>
            </nav>

            <div className="max-w-5xl mx-auto mt-8 p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">
                    Star Wars API Interface
                </h1>

                {/* Секция выбора категории и поиска */}
                <div className="flex flex-wrap gap-4 mb-8">

                    {/* Селект */}
                    <div className="w-full md:w-1/3">
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                            <option defaultValue>Select a category...</option>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                            <option value="starships">Starships</option>
                            <option value="vehicles">Vehicles</option>
                            <option value="species">Species</option>
                            <option value="films">Films</option>
                        </select>
                    </div>

                    {/* Поиск */}
                    <div className="w-full md:w-2/5">
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="Search by name..."
                        />
                    </div>
                </div>

                {/* Секция результатов (Карточки) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Карточка 1: Luke Skywalker */}
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="p-5">
                            <h5 className="text-xl font-bold mb-3 text-blue-600">Luke Skywalker</h5>
                            <p className="text-gray-700 mb-4">
                                <strong>Height:</strong> 172 cm <br />
                                <strong>Mass:</strong> 77 kg <br />
                                <strong>Hair color:</strong> Blond
                            </p>
                            <button className="bg-amber-500 text-white font-semibold px-4 py-2 rounded hover:bg-amber-600 transition">
                                Details
                            </button>
                        </div>
                    </div>

                    {/* Карточка 2: Tatooine */}
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="p-5">
                            <h5 className="text-xl font-bold mb-3 text-blue-600">Tatooine</h5>
                            <p className="text-gray-700 mb-4">
                                <strong>Climate:</strong> Arid <br />
                                <strong>Population:</strong> 200000 <br />
                                <strong>Terrain:</strong> Desert
                            </p>
                            <button className="bg-amber-500 text-white font-semibold px-4 py-2 rounded hover:bg-amber-600 transition">
                                Details
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default SwapiApp;