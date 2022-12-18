const quotes = [
  {
    quote:
      "Don't you know that you yourselves are God's temple and that God's Spirit dwells in your midst?",
    author: "1 Corinthians 3:16",
  },
  {
    quote:
      "‘I have the right to do anything,’ you say – but not everything is beneficial. ‘I have the right to do anything’ – but I will not be mastered by anything.",
    author: "1 Corinthians 6:12",
  },
  {
    quote:
      "Be careful, however, that the exercise of your rights does not become a stumbling block to the weak.",
    author: "1 Corinthians 8:9",
  },
  {
    quote:
      "So, if you think you are standing firm, be careful that you don't fall!",
    author: "1 Corinthians 10:12",
  },
  {
    quote:
      "So whether you eat or drink or whatever you do, do it all for the glory of God.",
    author: "1 Corinthians 10:31",
  },
  {
    quote:
      "For as woman came from man, so also man is born of woman. But everything comes from God.",
    author: "1 Corinthians 11:12",
  },
  {
    quote:
      "There are different kinds of gifts, but the same Spirit distributes them.",
    author: "1 Corinthians 12:4",
  },
  {
    quote: "Even so the body is not made up of one part but of many.",
    author: "1 Corinthians 12:14",
  },
  {
    quote:
      "If I speak in human or angelic tongues, but do not have love, I am only a resounding gong or a clanging cymbal.",
    author: "1 Corinthians 13:1",
  },
  {
    quote:
      "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
    author: "1 Corinthians 13:4",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
