import { useState } from "react"
import Backbutton from "../../components/Backbutton"
import Spinner from "../../components/Spinner"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const handleSaveBook = () => {
    const data = {
      title, 
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('https://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setLoading(err)
        alert('An error happened. Please Check Console')
        console.log(err)
      });
  };

  return (
    <>
      <div className="p-4">
        <BackButton />
        <h1 className="text-3x1 my-4">Create Book</h1>
      </div>
    </>
  )
}

export default CreateBook