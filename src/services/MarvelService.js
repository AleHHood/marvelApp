import {maxHeroDescrp, offset} from "./constant";

class MarvelService {
    _apiKey = 'apikey=8cf516732f4d231b96381d57adc89233';
    _apiBase = 'https://gateway.marvel.com:443/v1/public';

    getResource = async (url) => {
        let res = await fetch(url);
        
        if(!res.ok){
            throw new Error (`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async(offset = 200) => {
       const res = await this.getResource(`${this._apiBase}/characters?limit=9&offset=${offset}&${this._apiKey}`)
       return res.data.results.map(this._transformData);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`)
        return this._transformData(res.data.results[0])
    }
    
    _transformData = (res) => {
        return(
            {
                id: res.id,
                name: res.name,
                description: this.cutString(res.description, maxHeroDescrp),
                thumbnail: res.thumbnail.path +'.' + res.thumbnail.extension,
                wiki: res.urls[0].url,
                homepage: res.urls[1].url,
                comics: res.comics.items
            }
        )
    }

    cutString = (str, endIndex = 150) => {
        if(!str){
            return "Sorry no descriptions yet:("
        }else if(str.length > endIndex){
            return str.slice(0, endIndex) + '...'
        }
        else{
            return str;
        }
    }
}

export default MarvelService;