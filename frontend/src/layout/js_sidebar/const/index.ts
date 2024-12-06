import {
  BookOpen,
  Bot,
  Map,
  Frame,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const JS_SIDEBAR_SAMPLE_DATA = {
  settings_title: "Settings",
  settings: [
    {
      name: "Setting One",
      url: "#",
      icon: Frame,
    },
    {
      name: "Setting Two",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Setting Three",
      url: "#",
      icon: Map,
    },
  ],
  topics: [
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "1. Introduction to JavaScript",

      sub_topics: [
        {
          title: "1.1. Exploring JavaScript",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "1.1.1. Beginner Exploring JavaScript",
              url: "#",
            },
            {
              title: "1.1.2. Intermediate Exploring JavaScript",
              url: "#",
            },
            {
              title: "1.1.3. Professional Exploring JavaScript",
              url: "#",
            },
          ],
        },
        {
          title: "1.2. Hello World",
          url: "#",
          icon: Bot,
          items: [
            {
              title: "1.2.1. Hello World",
              url: "#",
            },
          ],
        },
        {
          title: "1.3. A Tour of JavaScript",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title: "1.3.1. A Tour of JavaScript",
              url: "#",
            },
          ],
        },
        {
          title: "1.4. Example: Character Frequency Histograms",
          url: "#",
          icon: Settings2,
          items: [
            {
              title: "1.4.1. Example: Character Frequency Histograms",
              url: "#",
            },
          ],
        },
        {
          title: "1.5. Summary",
          url: "#",
          icon: Settings2,
          items: [
            {
              title: "1.5.1. Summary",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "2. Lexical Structure",

      sub_topics: [
        {
          title: "2.1. The Text of a JavaScript Program",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "2.1.1. The Text of a JavaScript Program",
              url: "#",
            },
          ],
        },
        {
          title: "2.2. Comments",
          url: "#",
          icon: Bot,
          items: [
            {
              title: "2.2.1 Comments",
              url: "#",
            },
          ],
        },
        {
          title: "2.3. Literals",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title: "2.3.1. Literals",
              url: "#",
            },
          ],
        },
        {
          title: "2.4. Identifiers and Reserved Words",
          url: "#",
          icon: Settings2,
          items: [
            {
              title: "2.4.1. Reserved Words",
              url: "#",
            },
          ],
        },
        {
          title: "2.5. Unicode",
          url: "#",
          icon: Settings2,
          items: [
            {
              title: "2.5.1. Unicode Escape Sequences",
              url: "#",
            },
            {
              title: "2.5.2. Unicode Normalization",
              url: "#",
            },
          ],
        },
        {
          title: "2.6. Optional Semicolons",
          url: "#",
          icon: Settings2,
          items: [
            {
              title: "2.6.1. Optional Semicolons",
              url: "#",
            },
          ],
        },
        {
          title: "2.7. Summary",
          url: "#",
          icon: Settings2,
          items: [
            {
              title: "2.7.1. Summary",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "3. Types, Values, and Variables",

      sub_topics: [
        {
          title: "3.1. Overview and Definitions",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "3.1.1. Overview and Definitions",
              url: "#",
            },
          ],
        },
        {
          title: "3.2. Numbers",
          url: "#",
          icon: Bot,
          items: [
            {
              title: "3.2.1. Integer Literals",
              url: "#",
            },
            {
              title: "3.2.2. Floating-Point Literals",
              url: "#",
            },
            {
              title: "3.2.3. Arithmetic in JavaScript",
              url: "#",
            },
            {
              title: "3.2.4. Binary Floating-Point and Rounding Errors",
              url: "#",
            },
            {
              title: "3.2.5. Arbitrary Precision Integers with BigInt",
              url: "#",
            },
            {
              title: "3.2.6. Dates and Times",
              url: "#",
            },
          ],
        },
        {
          title: "3.3. Text",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title: "3.3.1. String Literals",
              url: "#",
            },
            {
              title: "3.3.2. Escape Sequences in String Literals",
              url: "#",
            },
            {
              title: "3.3.3. Working with Strings",
              url: "#",
            },
            {
              title: "3.3.4. Template Literals",
              url: "#",
            },
            {
              title: "3.3.5. Pattern Matching",
              url: "#",
            },
          ],
        },
        {
          title: "3.4 Boolean Values",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title: "3.4.1 Boolean Values",
              url: "#",
            },
          ],
        },
        {
          title: "3.5. null and undefined",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title: "3.5.1. null and undefined",
              url: "#",
            },
          ],
        },
        {
          title: "3.6. Symbols",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title: "3.6.1. Symbols",
              url: "#",
            },
          ],
        },
        {
          title: "3.7. The Global Object",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title: "3.7.1. The Global Object",
              url: "#",
            },
          ],
        },
        {
          title:
            "3.8. Immutable Primitive Values and Mutable Object References",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title:
                "3.8.1. Immutable Primitive Values and Mutable Object References",
              url: "#",
            },
          ],
        },
        {
          title: "3.9. Type Conversions",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title: "3.9.1. Conversions and Equality",
              url: "#",
            },
            {
              title: "3.9.2. Explicit Conversions",
              url: "#",
            },
            {
              title: "3.9.3. Object to Primitive Conversions",
              url: "#",
            },
          ],
        },
        {
          title: "3.10. Variable Declaration and Assignment",
          url: "#",
          icon: BookOpen,
          items: [
            {
              title: "3.10.1. Declarations with let and const",
              url: "#",
            },
            {
              title: "3.10.2. Variable Declarations with var",
              url: "#",
            },
            {
              title: "3.10.3. Destructuring Assignment",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "main_topic_title",

      sub_topics: [
        {
          title: "title",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "sub_title",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "main_topic_title",

      sub_topics: [
        {
          title: "title",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "title",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "main_topic_title",

      sub_topics: [
        {
          title: "title",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "title",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "main_topic_title",

      sub_topics: [
        {
          title: "title",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "title",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "main_topic_title",

      sub_topics: [
        {
          title: "title",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "title",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "main_topic_title",

      sub_topics: [
        {
          title: "title",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "title",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "main_topic_title",

      sub_topics: [
        {
          title: "title",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "title",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      main_topic_title: "main_topic_title",

      sub_topics: [
        {
          title: "title",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          items: [
            {
              title: "title",
              url: "#",
            },
          ],
        },
      ],
    },
  ],
};
