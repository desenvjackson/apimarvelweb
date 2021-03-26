import React from "react";
import LazyLoad from 'react-lazyload';
import ListingHero from '../data/marvelRepository'
import css from '../layouts/Details.css'


class details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            PostsListOne: [],
            nameCharacter: [],
            resultado: [],
            stories: [],
            urls: [],
            series: [],
            collections: [],
            events: [],
        };
    }

    componentDidMount() {
        //Recuperando id  
        const idComic = this.props.match.params
        const idComic_array = idComic["id"].split(',')
        this.listingComic(idComic_array[0])
    }


    listingComic = async (idComic) => {
        const resultado = await ListingHero.findComicRepository(idComic)
        await this.setState({
            PostsListOne: resultado.data.data.results,  // general data
            nameCharacter: resultado.data.data.results[0].characters.items, // characters data
            stories: resultado.data.data.results[0].stories.items,
            urls: resultado.data.data.results[0].urls,
            series: resultado.data.data.results[0].series,
            collections: resultado.data.data.results[0].collections,
            events: resultado.data.data.results[0].events
        })
    }



    render() {
        const { PostsListOne, stories, nameCharacter, urls, series, collections } = this.state;

        return (
            <>
                <div class="flex-container-details">


                    {PostsListOne && PostsListOne.map((post, idx) => (
                        <div class="col col1">
                            <img class="img-details" src={post.images[0].path + '.' + post.images[0].extension} />
                        </div>
                    ))}


                    <div class="col col2">

                        {PostsListOne && PostsListOne.map((post, idx) => (
                            <div>
                                <p class="body" >
                                <label class="titulo"> Titulo: </label>
                                {post.title}
                                    <p class="body">
                                        <label class="titulo"> Lançamento: </label>
                                        {post.dates[0].date.substr(8, 2) + '/' + post.dates[0].date.substr(5, 2) + '/' + post.dates[0].date.substr(0, 4)}
                                    </p>
                                </p>
                            </div>
                        ))}


                        <label class="titulo"> Characters: </label>
                        {nameCharacter && nameCharacter.map((post, idx) => (
                            <div>
                                <p class="body" >
                                    {post.name}
                                </p>
                            </div>
                        ))}

                    </div>


                    <div class="col col3">

                        <label class="titulo"> Stories: </label>
                        {stories && stories.map((post, idx) => (
                            <div>
                                <p class="body" >
                                    {post.name}
                                </p>
                            </div>
                        ))}



                        <label class="titulo"> Urls: </label>
                        {urls && urls.map((post, idx) => (
                            <div>
                                <p class="body" >
                                    {post.url}
                                </p>
                            </div>
                        ))}


                        <label class="titulo"> Series: </label>
                        <div>
                            <p class="body" >
                                {this.state.series.name}
                            </p>
                        </div>


                        <label class="titulo"> Collections: </label>
                        {collections && collections.map((post, idx) => (
                            <div>
                                <p class="body" >
                                    {post.name}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </>
        );

    }
}

export default details;

