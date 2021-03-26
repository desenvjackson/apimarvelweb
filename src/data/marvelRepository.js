import api from '../services/index'

export default class ListingHero {

   static async findHeroRepository(id, orderBy, formatType) {
        const resultado = await api.get("/v1/public/characters/" + id + "/comics?formatType=" + formatType + "&orderBy=" + orderBy)
        return resultado                   
    }

    static async findComicRepository(id) {
        const resultado = await api.get("/v1/public/comics/" + id )
        return resultado                   
    }


}