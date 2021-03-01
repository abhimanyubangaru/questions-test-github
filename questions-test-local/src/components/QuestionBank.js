const questions = [ // first array
  { //first question
    questionText : 'When was I a freshman?',
    answerOptions : [
      {answerText: "2020" , isCorrect: false},
      {answerText: "2018", isCorrect: false},
      {answerText: "2017", isCorrect: true},
      {answerText:"2019", isCorrect: false},
    ],
    media : 'https://vimeo.com/208208929',
    type: 'video',
    title: 'my Welcome to Cate video',
  },
  {
    questionText : 'What school do I go to?',
    answerOptions : [
      {answerText: "Blair" , isCorrect: false},
      {answerText: "Cate", isCorrect: true},
      {answerText: "Thacher", isCorrect: false},
      {answerText:"PHS", isCorrect: false},
    ],
    media : 'https://www.cate.org/wp-content/uploads/2018/08/I0A6394.jpg',
    type: 'photo',
    title: 'a picture of the barns',
  },
    {
      questionText : 'When was Cate founded?',
      answerOptions : [
        {answerText: "1910" , isCorrect: true},
        {answerText: "1900", isCorrect: false},
        {answerText: "1911", isCorrect: false},
        {answerText:"2021", isCorrect: false},
      ],
      media : 'https://www.cate.org/wp-content/uploads/2016/08/LH-1024x682.jpg',
      type: 'photo',
      title: 'a picture of Long House',
    }
];


export default questions;
