const generateQuote = function () {
  const quotes = [
    {
      quote:
        '"Two things are infinite: the universe and human stupidity; and I’m not sure about the universe."',
      author: "-Albert Einstein-",
    },
    {
      quote:
        '"I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell don’t deserve me at my best."',
      author: "-Marilyn Monroe-",
    },
    {
      quote: '"Be yourself; everyone else is already taken."',
      author: "-Oscar Wilde-",
    },
    {
      quote: '"It is impossible to manufacture or imitate love"',
      author: "-Horace Slughorn-",
    },
    {
      quote:
        '"Being different isn’t a bad thing. I means that you are brave enough to be yourself."',
      author: "-Luna Lovegood-",
    },
    {
      quote:
        '"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals."',
      author: "-Sirius Black-",
    },
    {
      quote:
        '"Never trust anything that can think for itself if you can’t see where it keeps its brain."',
      author: "-Arthur Weasley-",
    },
    {
      quote: '"Every human life is worth the same, and worth saving."',
      author: "-Kingsley Shacklebolt-",
    },
    {
      quote: '"Have a biscuit, Potter."',
      author: "-Minerva McGonagall-",
    },
    {
      quote:
        '"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."',
      author: "-Albus Dumbledore-",
    },
    {
      quote: '"Socks are Dobby’s favorite, favorite clothes, sir!"',
      author: "-Dobby-",
    },
  ];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author;
};
window.onload = function () {
  generateQuote();
  document.getElementById("generate").addEventListener("click", generateQuote);
};
