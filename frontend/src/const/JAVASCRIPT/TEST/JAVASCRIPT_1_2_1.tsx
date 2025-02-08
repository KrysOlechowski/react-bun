export const JAVASCRIPT_1_2_1 = {
  lesson_index: "1.2.1.",
  main_title: "Boolean Type",
  difficulty: 1,
  number_of_lessons: 2,
  content: {
    main_screen_html: [
      `<div style="border:1px solid red" className="x-container bg-amber-700">
        <h1 className="x-title">Whats is Boolean</h1>
        <div className="x-text">
          HTML Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nesciunt quo quia qui adipisci, pariatur dolores aliquam totam
          distinctio voluptas cupiditate autem unde sunt laboriosam asperiores,
          soluta molestias maxime sint.
        </div>
        <p className="x-text">
          HTML Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nesciunt quo quia qui adipisci, pariatur dolores aliquam totam
          distinctio voluptas cupiditate autem unde sunt laboriosam asperiores,
          soluta molestias maxime sint.
        </p>
      </div>`,
    ],
    questions: [
      {
        main_title: "Are Boolean literals case sensitive??",
        difficulty: 1,
        question_index: 1,
        possible_answers: ["Yes", "No"],
        correct_answer: "Yes",
        question_content_html: `<div className="x-question">
            <h1 className="x-title">Are Boolean literals case sensitive?</h1>
          </div>`,

        explanation_content_html: `<div className="x-explanation">
            <h1 className="x-title">Boolean literals are case sensitive. TRUE and FALSE for example in every order.</h1>
        </div>`,
      },
      {
        main_title: "Is this statement true?",
        difficulty: 1,
        question_index: 2,
        possible_answers: ["Yes", "No"],
        correct_answer: "Yes",
        question_content_html: `<div className="x-question">
            <h1 className="x-title">Is this statement true?</h1>
            <div className="x-code">
                let obj = {}
            </div>
          </div>`,

        explanation_content_html: `<div className="x-explanation">
            <h1 className="x-title">Casting Obejct, even empty is returning true</h1>
        </div>`,
      },
      {
        main_title: "What is the value of variable BOOL?",
        difficulty: 1,
        question_index: 3,
        possible_answers: ["Yes", "No"],
        correct_answer: "Yes",
        question_content_html: `<div className="x-question">
            <h1 className="x-title">What is the value of variable BOOL?</h1>
            <div>let obj = {}; let BOOL = Boolean(obj);</div>
          </div>`,

        explanation_content_html: `<div className="x-explanation">
            <h1 className="x-title">Boolean literals are case sensitive. TRUE and FALSE for example in every order.</h1>
        </div>`,
      },
    ],
    end_screen: {
      end_screen_content_html: `<div className="x-end">
          <h1 className="x-title">Your score?</h1>
        </div>`,
    },
  },
};
