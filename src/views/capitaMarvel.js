import React from "react";
import LazyLoad from 'react-lazyload';
import ListingHero from '../data/marvelRepository'
import css from '../layouts/Show.css'

class capitaMarvel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      PostsListOne: [],
      nameCharacter: "",
      resultado: []
    };
  }

  componentDidMount() {
    this.listingHeroComic()
  }


  listingHeroComic = async () => {

    const data = {
      name: 'Carol Danvers',
      id: '1009261',
      //id: '1009224', // Captian Marvel da Década de 60
      orderBy: 'onsaleDate',
      formatType: 'comic'
    }

    const resultado = await ListingHero.findHeroRepository(data.id, data.orderBy, data.formatType)
    this.setState({ PostsListOne: resultado.data.data.results });
    console.log("  ############# ", resultado.data.data.results)

  }

  handleSubmit = (id_comic) => {
    let dados = [id_comic]
    this.props.history.push(`/details${dados}`)
  }


  render() {
    const { PostsListOne, resultado } = this.state;

    return (
      <>
        <div class="flex-container">
          {PostsListOne && PostsListOne.map((post, idx) => (
            <div class="flex-container-inter" onClick={() => this.handleSubmit(post.id)}>
               <LazyLoad height={100}> 
                <div class="item1">
                  <img class="img" src={post.images[0].path + '.' + post.images[0].extension} />
                  <p class="item2"> {post.title} </p>
                  <p class="item3">
                    {post.dates[0].date.substr(8, 2) + '/' + post.dates[0].date.substr(5, 2) + '/' + post.dates[0].date.substr(0, 4)}
                  </p>
                </div>
             </LazyLoad> 
            </div>
          ))}
        </div>
      </>
    );

  }
}

export default capitaMarvel;

