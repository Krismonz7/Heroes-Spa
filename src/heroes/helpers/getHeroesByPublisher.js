import { heroes } from "../data";

export const getHeroesByPublisher = (publisher) => {


    const publishers = ['Marvel Comics','DC Comics'];

    if (!publishers.includes(publisher)) {

        throw new Error('Este publisher no existe');

    }

    return  heroes.filter(heroe => heroe.publisher === publisher )
}
