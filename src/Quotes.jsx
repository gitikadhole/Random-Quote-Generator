import React , {useState, useEffect} from 'react'

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
  
    useEffect(() => {
      getQuote()
    }, []);
  
    const getQuote = () => {
      let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          let dataQuotes = data.quotes;
          console.log(dataQuotes);
          let randomNum = Math.floor(Math.random() * dataQuotes.length);
          let randomQuote = dataQuotes[randomNum];
  
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
        })
    }
  
     const handleClick = () => {
      getQuote();
     }
    
     return(
        <>
      <h1 className='font-serif text-3xl font-bold my-3 text-center'>Quote Generator</h1>
      <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">{quote}</h1>
            <p>{author}</p>
          </div>
      </div>
      <div className="flex flex-wrap justify-center my-4">
      <button onClick={handleClick} class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
        Generate Quote!!
      </button>
      </div>
    </>
)}
     export default Quotes;