// import { useState, useEffect } from "react";
// import Backbutton from "../../components/Backbutton";
// import Spinner from "../../components/Spinner";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSnackbar } from 'notistack';

// const EditBook = () => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [publishYear, setPublishYear] = useState("");
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     // Fetch book data when component mounts or id changes
//     axios.get(`http://localhost:5555/books/${id}`)
//       .then((res) => {
//         // Ensure the API response contains the data
//         console.log("Fetched Data:", res.data);
//         setTitle(res.data.title || "");
//         setAuthor(res.data.author || "");
//         setPublishYear(res.data.publishYear || "");
//         setLoading(false);
//       })
//       .catch((err) => {
//         setLoading(false);
//         enqueueSnackbar("An error occurred while fetching book details.", { variant: 'error' });
//         console.error(err);
//       });
//   }, [id, enqueueSnackbar]);

//   const handleEditBook = () => {
//     if (!title || !author || !publishYear) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     const data = {
//       title,
//       author,
//       publishYear,
//     };

//     setLoading(true);

//     axios.put(`http://localhost:5555/books/${id}`, data)
//       .then(() => {
//         setLoading(false);
//         enqueueSnackbar('Book edited successfully', { variant: 'success' });
//         navigate('/');
//       })
//       .catch((err) => {
//         setLoading(false);
//         enqueueSnackbar('Error occurred while editing the book', { variant: 'error' });
//         console.error(err);
//       });
//   };

//   return (
//     <div className='p-4'>
//       <Backbutton />
//       <h1 className='text-3xl my-4'>Edit Book</h1>
//       {loading ? <Spinner /> : (
//         <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
//           <div className='my-4'>
//             <label className='text-xl mr-4 text-gray-500'>Title</label>
//             <input
//               type='text'
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className='border-2 border-gray-500 px-4 py-2 w-full'
//             />
//           </div>
//           <div className='my-4'>
//             <label className='text-xl mr-4 text-gray-500'>Author</label>
//             <input
//               type='text'
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//               className='border-2 border-gray-500 px-4 py-2 w-full'
//             />
//           </div>
//           <div className='my-4'>
//             <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
//             <input
//               type='number'
//               value={publishYear}
//               onChange={(e) => setPublishYear(e.target.value)}
//               className='border-2 border-gray-500 px-4 py-2 w-full'
//             />
//           </div>
//           <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
//             Save
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EditBook;

import { useState, useEffect } from "react";
import Backbutton from "../../components/Backbutton";
import Spinner from "../../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Fetch book data when component mounts or id changes
    axios.get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        console.log("Fetched Data:", res.data); // Log the fetched data
        
        // Assuming the data is nested within a 'data' object
        const bookData = res.data.data; 
        setTitle(bookData.title || "");
        setAuthor(bookData.author || "");
        setPublishYear(bookData.publishYear || "");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An error occurred while fetching book details.", { variant: 'error' });
        console.error("Fetch Error:", err); // Log the error
      });
  }, [id, enqueueSnackbar]);

  const handleEditBook = () => {
    if (!title || !author || !publishYear) {
      alert("Please fill out all fields.");
      return;
    }

    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('Error occurred while editing the book', { variant: 'error' });
        console.error("Edit Error:", err); // Log the error
      });
  };

  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input
              type='number'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;