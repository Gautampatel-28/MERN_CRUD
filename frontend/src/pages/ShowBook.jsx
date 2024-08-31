
import {useState, useEffect, useImperativeHandle} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Backbutton from '../../components/Backbutton';
import Spinner from '../../components/Spinner';

const ShowBook = () => {
  const [books,setBooks] = useState([]);
  const [loading, setLoading] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://localhost:5555/books/${id}`)
      .then((res) => {
        setLoading(false)
      })
  }, [])
  return (
    <>
      <div className='p-4'>
          <Backbutton />
          <h1 className='text-3x1 my-4'>Show Book</h1>
          {
            loading ? (
              <Spinner/>
            ) : (
              <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>
                <div className='my-4'>
                  <span className='text-xl mr-4 text-gray-500'>Id</span>
                  <span>{book._id}</span>
                </div>
                <div className='my-4'>
                  <span className='text-xl mr-4 text-gray-500'>Title</span>
                  <span>{book._title}</span>
                </div>
                <div className='my-4'>
                  <span className='text-xl mr-4 text-gray-500'>Author</span>
                  <span>{book._author}</span>
                </div>
                <div className='my-4'>
                  <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                  <span>{book._publishYear}</span>
                </div>
              </div>
            )}
      </div>
    </>
  )
}

export default ShowBook