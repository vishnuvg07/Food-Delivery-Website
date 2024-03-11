import React, { useEffect, useReducer } from 'react';
import Thumnails from '../../Components/Thumnails/Thumnails';
import {getAll,getAllByTag,getAllTags,search} from '../../Sevices/Foodservice';
import { useParams } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import Tags from '../../Components/Tags/Tags';
import NotFound from '../../Components/NotFound/NotFound';


const initialState = { foods: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
      case 'TAGS_LOADED':
        return { ...state, tags: action.payload };
      
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods,tags} = state;
  const {searchTerm,tag} = useParams();
  

  useEffect(() => {
   
    getAllTags().then(tags => dispatch({type:'TAGS_LOADED',payload:tags}));

    const loadFoods =
    tag
    ? getAllByTag(tag)
    : searchTerm
    ? search(searchTerm)
    : getAll();

  
    loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
  }, [searchTerm,tag]);

  return (
    <>
<Search/>
<Tags tags={tags}/>
{foods.length === 0 && <NotFound linkText="Reset Search"/>}
      <Thumnails foods={foods} />
    </>
  );
}