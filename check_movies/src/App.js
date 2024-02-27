import { useState } from 'react';
import './App.css';
import NavMovie from './Components/NavMovie';
import ListMovie from './Components/ListMovie';
import AddMovie from './Components/AddMovie';
import FilterMovie from './Components/FilterMovie';

function App() {
  const [movies, setMovies] = useState(
    [
      {title : 'Un divan à Tunis', description :'Après avoir exercé en France, Selma, 35 ans, ouvre son cabinet de psychanalyse dans une banlieue populaire de Tunis. Au lendemain de la Révolution, la demande s avère importante dans ce pays "schizophrène". Mais entre ceux qui prennent Freud et sa barbe pour un frère musulman et ceux qui confondent séances tarifées avec "prestations tarifées", les débuts du cabinet sont mouvementés.',posterURL:'https://media.services.cinergy.ch/media/box1600/f85e13bad7f78fef322627427b1eb99d701b725c.jpg',rating : 5, id : Math.random()},
      {title : 'Dachra', description :'Yasmine, étudiante en journalisme, et ses deux amis Walid et Bilel qui cherchent à élucider le mystère d’un vieux crime, commis il y a plus de 25 ans. Au milieu de nulle part, une femme avait été trouvée mutilée et presque morte. Une fois leur investigation terminée, ils vont se trouver dans une forêt où ils allaient découvrir un petit village isolé appelé “Dachra”. Coincé dans ce territoire inconnu, le trio va essayer de fuir l’horreur. Auront-ils réussi à s’échapper ?',posterURL:'https://www.galeries.be/wp-content/uploads/2020/02/Dachra-poster.jpg',rating : 5, id : Math.random()},
      {title : 'Regarde-moi', description :'Lofti, la quarantaine, immigré tunisien installé à Marseille, partage sa vie entre son magasin d électroménager et sa petite-amie française, enceinte. Cependant, alors que son ex-femme vient de faire un AVC, il se retrouve tout à coup responsable de leur petit garçon autiste de 9 ans, Amr, qu il ne connaît pas.',posterURL:'https://pictures.artify.tn/media/fjagsqnc57kslterxbc1.jpg',rating : 2, id : Math.random()},
      {title : 'Ghodwa', description :'Habib, avocat, vit un dilemme psychologique dans sa quête de la vérité sur les exactions commises sous l ancien régime de Ben Ali. Habib tente d établir une certaine justice sociale.',posterURL:'https://www.moviemeter.nl/images/cover/1144000/1144650.jpg?cb=1642345600',rating : 3, id : Math.random()},


  
    ]
  );
  const [search, setSearch] = useState('')
  const [etoile, setEtoile] = useState(0)
  return (
   <div>
      <NavMovie/>
      <div className='AddFil'>
        <FilterMovie setSearch={setSearch} setEtoile={setEtoile} search={search} etoile={etoile}/>
        <AddMovie setMovies={setMovies} movies={movies}/>
      </div>
      <ListMovie movies={movies} search={search} etoile={etoile}/>
   </div>
  );
}

export default App;
