import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

	const { isLoading, pokemons, page }  = useSelector( (state) => state.pokemons )

	const dispatch = useDispatch();


	useEffect(() => {
		dispatch( getPokemons() );
	}, [])

	const nextPage = () => {
		dispatch( getPokemons(page) );
	}

  return (
    <>
    <h1>PokemonApp</h1>
    <hr />

	<button disabled='true'>Loading: { isLoading ? 'True' : 'False' }</button>


		<ul>
			{
				!isLoading 
					? pokemons.map(pokemon => (
						<li key={pokemon.name}>
							{pokemon.name}
						</li>
					))
					: ''
			}
			
		</ul>

			<button disabled={isLoading} onClick={nextPage}>Next</button>

    </>
    )
}
