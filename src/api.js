import axios from "axios";

const searchImages = async (term) => {
 const response =  await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Z_Sffxz_YnUjyxVl1o6Q-BFhFnO13MK-q9qFkte0W6g'
        },
        params: {
            query:term,
        }
    });

    console.log (response);
    return response.data.results;
};

export default searchImages;