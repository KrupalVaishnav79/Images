import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Imagelist from './components/ImageList';
import searchImages from './api';

function App() {
    const [images, setImages] = useState ([]);


    const handleSubmit = async (term) => {
       const result =  await searchImages(term);
      
       setImages(result);
    };
    return (
    <div>
        <SearchBar onSubmit={handleSubmit} />
        <Imagelist images={images} />  
    </div>
    );
}

export default App;